export const arrayIncludes = <T>(
  array: T[] | readonly T[],
  item: unknown,
  fromIndex?: number
): item is T => {
  return array.includes(item as T, fromIndex);
};
