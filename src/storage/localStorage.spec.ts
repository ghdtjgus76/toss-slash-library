import { LocalStorage, localStorage } from "./localStorage";
import { SerializableParam } from "./models";

const testData: SerializableParam = {
  key: "testData1",
};

export default describe("로컬 스토리지", () => {
  let storage: LocalStorage;

  beforeEach(() => {
    storage = localStorage;
    storage.set("testData1", testData);
  });

  afterEach(() => {
    storage.clearAll();
  });

  // get
  it("get 메소드를 통해 로컬 스토리지에 저장된 데이터를 불러옵니다.", () => {
    const data = storage.get("testData1");

    expect(data).toEqual(testData);
  });

  // set + get
  it("로컬 스토리지에 set 메소드를 통해 데이터 저장 후, get 메소드를 통해 로컬 스토리지에 데이터가 저장되었는지 확인합니다.", () => {
    const newData: SerializableParam = {
      key: "testData2",
    };
    storage.set("testData2", newData);
    const savedData = storage.get("testData2");

    expect(savedData).toEqual(newData);
  });

  // remove + get
  it("로컬 스토리지에 저장된 데이터를 remove 메소드를 통해 제거한 후 get 메소드를 통해 로컬 스토리지에 데이터가 있는지 확인합니다.", () => {
    storage.remove("testData1");
    const data = storage.get("testData1");

    expect(data).toBeNull();
  });

  // clearAll + get
  it("로컬 스토리지 내부 데이터를 clearAll 메소드를 통해 모두 삭제한 후, get 메소드를 통해 데이터가 잘 삭제되었는지 확인합니다.", () => {
    storage.clearAll();
    const data = storage.get("testData1");

    expect(data).toBeNull();
  });
});
