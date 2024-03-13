import { SerializableParam } from "./models";

type StorageType = {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
  clearAll(): void;
};

export class LocalStorage implements StorageType {
  private serialize = <T extends SerializableParam>(value: T): string | null => {
    try {
      return JSON.stringify(value);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  private deserialize = (value: string): string | null => {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  get(key: string): string | null {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? this.deserialize(storedValue) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, this.serialize(value) as string);
    } catch (error) {
      console.error(error);
    }
  }

  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  clearAll(): void {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}

export const localStorage = new LocalStorage();
