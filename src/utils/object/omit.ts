import { objectKeys, ObjectKeys } from "./objectKeys";

export const omit = <
  ObjectType extends Record<PropertyKey, unknown>,
  KeysType extends Array<ObjectKeys<ObjectType>>
>(
  obj: ObjectType,
  keys: KeysType
) => {
  return objectKeys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as ObjectType);
};
