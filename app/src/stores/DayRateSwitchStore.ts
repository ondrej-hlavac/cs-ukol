import { makeAutoObservable, runInAction } from "mobx";

class DayRateSwitchStore {
  moveDays: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setMoveDays(days: number) {
    runInAction(() => {
      this.moveDays = days;
    });
  }
}

export const dayRateSwitchStore = new DayRateSwitchStore();
