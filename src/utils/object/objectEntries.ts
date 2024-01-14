import { ObjectKeys } from "./objectKeys";

export const objectEntries = <ObjectType extends Record<PropertyKey, unknown>>(
  obj: ObjectType
): Array<[ObjectKeys<ObjectType>, ObjectType[ObjectKeys<ObjectType>]]> => {
  return Object.entries(obj) as Array<
    [ObjectKeys<ObjectType>, ObjectType[ObjectKeys<ObjectType>]]
  >;
};
