import { makeAutoObservable } from "mobx";

class CurrencyStore {
  currencyData: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadData() {
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    // FIXME: validate response => error display
    this.currencyData = jsonData;
  }
}

export const currencyStore = new CurrencyStore();
