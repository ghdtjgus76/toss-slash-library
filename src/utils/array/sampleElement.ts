import { NonEmptyArray } from "../../Funnel/models";

export function sampleElement<T>(arr: NonEmptyArray<T>): T;
export function sampleElement<T>(arr: T[]): T | undefined;
export function sampleElement<T>(arr: T[]): T | undefined {
  const randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
}
