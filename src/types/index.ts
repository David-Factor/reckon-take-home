import * as z from "myzod";

// parsers

export const stockPriceSchema = z.object({
  code: z.string(),
  price: z.number(),
});

// types

export type StockPrice = z.Infer<typeof stockPriceSchema>;

export type Log = {
  updatesFor: Date;
  stockPrices: StockPrice[];
};

export type Summary = {
  stock: string;
  starting: number;
  lowest: number;
  highest: number;
  current: number;
};
