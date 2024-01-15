import { objectValues } from "./objectValues";

export default describe("objectValues 함수", () => {
  let languages: Record<"rust" | "swift" | "js", number>;

  beforeEach(() => {
    languages = {
      rust: 1,
      swift: 2,
      js: 3,
    } as const;
  });

  it("objectValues 함수의 실행 결과는 Object.values() 함수의 실행 결과와 동일해야 합니다.", () => {
    expect(objectValues(languages)).toStrictEqual(Object.values(languages));
    expect(objectValues(languages)).toStrictEqual([1, 2, 3]);
  });
});
