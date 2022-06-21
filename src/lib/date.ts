const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatDate = (date: Date) => {
  const yyyymmdd = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  const hhmmss = [date.getHours(), date.getMinutes(), date.getSeconds()];
  return [yyyymmdd.map(pad).join("-"), hhmmss.map(pad).join(":")].join(" ");
};
