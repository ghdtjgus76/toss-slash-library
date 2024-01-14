export type ObjectKeys<ObjectType extends Record<PropertyKey, unknown>> =
  `${Exclude<keyof ObjectType, symbol>}`;

export const objectKeys = <ObjectType extends Record<PropertyKey, unknown>>(
  obj: ObjectType
): Array<ObjectKeys<ObjectType>> => {
  return Object.keys(obj) as Array<ObjectKeys<ObjectType>>;
};
