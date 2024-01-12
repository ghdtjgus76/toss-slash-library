import { NonEmptyArray } from "../Funnel/models";

export const assertNonEmptyArray = <T>(
  arr: T[],
  error: Error | string = new Error("AssertionError: EmptyArray")
): asserts arr is NonEmptyArray<T> => {
  if (!arr.length) {
    if (typeof error === "string") {
      throw new Error(error);
    } else {
      throw error;
    }
  }
};
