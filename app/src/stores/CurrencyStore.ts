import { makeAutoObservable, runInAction } from "mobx";
import { ICurrency } from "../types";

class CurrencyStore {
  currencyData: ICurrency[] = [];
  favoriteCurrencyShortNames: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadData() {
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    // FIXME: validate response => error display
    this.currencyData = jsonData;
  }

  loadFavoritesFromStorage() {
    const favorites = localStorage.getItem("favoriteCurrencyShortNames");

    if (favorites) {
      this.favoriteCurrencyShortNames = JSON.parse(favorites);
    }
  }

  setFavoritesToStorage() {
    localStorage.setItem(
      "favoriteCurrencyShortNames",
      JSON.stringify(this.favoriteCurrencyShortNames)
    );
  }

  get favoriteCurrencies() {
    return this.currencyData.filter((currency: ICurrency) => {
      return this.favoriteCurrencyShortNames.some(
        (name: string) => currency.shortName === name
      );
    });
  }

  addFavoriteCurrency(shortName: string) {
    runInAction(() => {
      this.favoriteCurrencyShortNames.push(shortName);
      this.setFavoritesToStorage();
    });
  }

  removeFavoriteCurrency(shortName: string) {
    runInAction(() => {
      const favoriteCurrenciesCopy = [...this.favoriteCurrencyShortNames];
      const newFavoriteCurrencies = favoriteCurrenciesCopy.reduce(
        (acc: string[], currency: string) => {
          if (currency !== shortName) {
            return acc.concat(currency);
          }

          return acc;
        },
        []
      );

      this.favoriteCurrencyShortNames = newFavoriteCurrencies;
      this.setFavoritesToStorage();
    });
  }
}

export const currencyStore = new CurrencyStore();
