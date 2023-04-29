import { makeAutoObservable, runInAction } from "mobx";
import { ICurrency } from "../types";

class CurrencyStore {
  currencyData: ICurrency[] = [];
  favoriteCurrencyShortNames: string[] = ["AUD"];

  constructor() {
    makeAutoObservable(this);
  }

  async loadData() {
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    // FIXME: validate response => error display
    this.currencyData = jsonData;
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
    });
  }
}

export const currencyStore = new CurrencyStore();
