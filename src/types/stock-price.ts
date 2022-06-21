import * as z from "myzod";

export const stockPriceSchema = z.object({
  code: z.string(),
  price: z.number(),
});

export type StockPrice = z.Infer<typeof stockPriceSchema>;
