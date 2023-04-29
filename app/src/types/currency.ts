export interface ICurrency {
  shortName: string; // FIXME: can be ENUM
  name: string;
  country: string;
  move: number;
  buy: number;
  sell: number;
  cnb: number;
}
