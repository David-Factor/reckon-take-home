import { summarise } from ".";
import { Log } from "../types";

const fixture: Log[] = [
  {
    updatesFor: new Date(1),
    stockPrices: [
      { code: "AFAIK", price: 160.61 },
      { code: "AKA", price: 1020.66 },
    ],
  },
  {
    updatesFor: new Date(0),
    stockPrices: [
      { code: "AFAIK", price: 16.61 },
      { code: "AKA", price: 102.66 },
      { code: "GMAO", price: 85.41 },
    ],
  },
];

test("should summarise logs", () => {
  const summary = summarise(fixture);
  expect(summary).toMatchInlineSnapshot(`
Array [
  Object {
    "current": 160.61,
    "highest": 160.61,
    "lowest": 16.61,
    "starting": 16.61,
    "stock": "AFAIK",
  },
  Object {
    "current": 1020.66,
    "highest": 1020.66,
    "lowest": 102.66,
    "starting": 102.66,
    "stock": "AKA",
  },
  Object {
    "current": 85.41,
    "highest": 85.41,
    "lowest": 85.41,
    "starting": 85.41,
    "stock": "GMAO",
  },
]
`);
});
