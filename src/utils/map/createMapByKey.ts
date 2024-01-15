export const createMapByKey = <Object, KeyName extends keyof Object>(
  objects: Object[],
  key: KeyName
) => {
  type KeyType = Object[KeyName];

  const map = new Map<KeyType, Object>();

  for (const object of objects) {
    const keyValue = object[key];
    map.set(keyValue, object);
  }

  return map;
};
