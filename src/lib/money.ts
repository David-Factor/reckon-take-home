export const formatMoney = (n: number) =>
  new Intl.NumberFormat("en-AU", {
    currency: "AUD",
    style: "currency",
  }).format(n);
