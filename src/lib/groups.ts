// apply a function to each group
export function mapGroup<T, U>(
  groups: Record<string, T[]>,
  callback: (group: [key: string, values: T[]]) => U[]
): Record<string, U[]> {
  const entries = Object.entries(groups);
  const mapped = entries.map(([key, values]) => [key, callback([key, values])]);
  return Object.fromEntries(mapped);
}
