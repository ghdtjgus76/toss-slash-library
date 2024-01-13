import { NonEmptyArray } from "../../Funnel/models";

export function lastElement<T>(arr: NonEmptyArray<T>): T;
export function lastElement<T>(arr: T[]): T | undefined;
export function lastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
