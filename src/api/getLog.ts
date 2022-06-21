import * as z from "myzod";
import { fetchRemote, Remote } from "../lib/remote";
import { Log, stockPriceSchema } from "../types";

export const getLog = async (): Promise<Remote<Log>> =>
  fetchRemote(
    "https://join.reckon.com/stock-pricing",
    z
      .array(stockPriceSchema)
      .map((stockPrices) => ({ stockPrices, updatesFor: new Date() }))
  );
