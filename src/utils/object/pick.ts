export const pick = <
  ObjectType extends Record<PropertyKey, unknown>,
  KeyArrayType extends Array<keyof ObjectType>
>(
  obj: ObjectType,
  keys: KeyArrayType
) => {
  const picked = {} as ObjectType;

  for (const key of keys) {
    picked[key] = obj[key];
  }

  return picked;
};
