type Primitive = undefined | null | boolean | number | symbol | string;

export type SerializableParam =
  | Primitive
  | Date
  | { toJSON: () => string }
  | readonly SerializableParam[]
  | Readonly<{ [key: string]: SerializableParam }>;
