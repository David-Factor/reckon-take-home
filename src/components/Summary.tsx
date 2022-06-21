import React from "react";
import { summarise } from "../store";
import { Log } from "../types";

type Props = {
  logs: Log[];
};

export const Summary = ({ logs }: Props) => {
  const summaries = summarise(logs);
  if (!summaries.length) return <>Waiting for logs...</>;

  const headers = Object.keys(summaries[0]);

  return (
    <div className="border border-black border-round p2">
      <table className="w-100">
        <thead>
          <tr>
            {headers.map((header) => {
              if (header === "stock") {
                return (
                  <th className="left-align capitalise" key={header}>
                    {header}
                  </th>
                );
              }
              return (
                <th className="right-align capitalise" key={header}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {summaries.map((summary) => (
            <tr key={summary.stock}>
              {Object.keys(summary).map((key) => {
                if (key === "stock") {
                  return <td>{summary.stock}</td>;
                }
                return (
                  <td className="right-align" key={key}>
                    {summary[key as keyof typeof summary]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
