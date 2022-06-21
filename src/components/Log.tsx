import React from "react";
import { formatDate } from "../lib/date";
import { formatMoney } from "../lib/money";
import { Log as LogType } from "../types";

type DescriptionProps = {
  term: string;
  definition: string | React.ReactNode;
};

const Description = ({ term, definition }: DescriptionProps) => (
  <div className="flex">
    <dt className="inline w-6">{term}</dt>
    <dd className="inline">{definition}</dd>
  </div>
);

type LogProps = {
  logs: LogType[];
};

export const Log = ({ logs }: LogProps) => (
  <div className="p2 overflow-scroll border border-black border-round h-70vh">
    {logs.map((log) => {
      const date = formatDate(log.updatesFor);
      return (
        <dl key={date}>
          <Description term={"Updates For"} definition={<time>{date}</time>} />
          {log.stockPrices.map(({ code, price }) => (
            <Description
              key={code}
              term={code}
              definition={formatMoney(price)}
            />
          ))}
        </dl>
      );
    })}
  </div>
);
