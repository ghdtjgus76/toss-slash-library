import { ObjectKeys } from "./objectKeys";

export const objectValues = <ObjectType extends Record<PropertyKey, unknown>>(
  obj: ObjectType
): Array<ObjectType[ObjectKeys<ObjectType>]> => {
  return Object.values(obj) as Array<ObjectType[ObjectKeys<ObjectType>]>;
};
