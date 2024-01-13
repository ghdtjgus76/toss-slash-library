import { NonEmptyArray } from "../../Funnel/models";

export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> => {
  return !!arr.length;
};
