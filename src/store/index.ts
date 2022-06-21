import { groupBy, last, max, min } from "lodash";
import { mapGroup } from "../lib/groups";
import { Remote } from "../lib/remote";
import { Log, Summary } from "../types";

export type Store = {
  polling: boolean;
  remoteLog: Remote<Log>;
  logs: Log[];
};

export const initial: Store = {
  polling: true,
  remoteLog: { type: "loading" },
  logs: [],
};

export const prependLog = (log: Log, logs: Log[]): Log[] => [log, ...logs];

export const summarise = (logs: Log[]): Summary[] => {
  // extract a flat list of stock prices
  const stockPrices = logs.flatMap((log) => log.stockPrices);

  // group by stock
  const groupedStocks = groupBy(stockPrices, (log) => log.code);

  // map each group into array of prices
  const prices = mapGroup(groupedStocks, ([, values]) =>
    values.map(({ price }) => Number(price))
  );

  // create a summary per group
  const summary = mapGroup(prices, ([stock, values]) => {
    const starting = last(values);
    const lowest = min(values);
    const highest = max(values);
    const current = values[0];

    if (!starting || !lowest || !highest || !current) return [];
    return [{ stock, starting, lowest, highest, current }];
  });

  // ungroup into a flat list of summaries
  return Object.values(summary).flat();
};
