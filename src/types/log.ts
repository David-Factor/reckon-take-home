import { StockPrice } from "./stock-price";

export type Log = {
  updatesFor: Date;
  stockPrices: StockPrice[];
};
