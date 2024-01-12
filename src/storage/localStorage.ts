import { SerializableParam } from "./models";

interface Storage<T extends SerializableParam> {
  get(key: string): T | null;
  set(key: string, value: T): void;
  remove(key: string): void;
  clearAll(): void;
}

class LocalStorage implements Storage<SerializableParam> {
  private serialize = (value: SerializableParam): string => {
    return JSON.stringify(value);
  };

  private deserialize = (value: string | null): SerializableParam => {
    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  };

  get(key: string) {
    return this.deserialize(window.localStorage.getItem(key));
  }

  set(key: string, value: SerializableParam) {
    window.localStorage.setItem(key, this.serialize(value));
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }

  clearAll() {
    window.localStorage.clear();
  }
}

export const localStorage = new LocalStorage();
