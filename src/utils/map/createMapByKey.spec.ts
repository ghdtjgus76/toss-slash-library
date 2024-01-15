import { createMapByKey } from "./createMapByKey";

export default describe("createMapByKey 함수", () => {
  type MapKey = number | (() => void);
  type MapValue = { id: MapKey; value: string };

  let map: Map<MapKey, MapValue>;
  let func: () => void;
  let objectArray: MapValue[];

  beforeEach(() => {
    func = () => {};
    objectArray = [
      { id: 1, value: "1" },
      { id: 2, value: "2" },
      { id: func, value: "func" },
    ];
    map = createMapByKey(objectArray, "id");
  });

  it("객체 배열에서 특정 키를 키로 하는 Map을 반환합니다.", () => {
    expect(map.get(1)).toStrictEqual(objectArray[0]);
    expect(map.get(2)).toStrictEqual(objectArray[1]);
    expect(map.get(func)).toStrictEqual(objectArray[2]);
  });

  it("생성된 Map에서 없는 key를 get 메소드를 통해 불러오려고 하면 undefined를 반환합니다.", () => {
    expect(map.get(0)).toBe(undefined);
    expect(map.get(3)).toBe(undefined);
  });
});
