import { objectKeys } from "./objectKeys";

export default describe("objectKeys", () => {
  let languages: Record<"rust" | "swift" | "js", number>;

  beforeEach(() => {
    languages = {
      rust: 1,
      swift: 2,
      js: 3,
    } as const;
  });

  it("objectKeys 함수의 실행 결과는 Object.Keys() 함수의 실행 결과와 동일해야 합니다.", () => {
    expect(objectKeys(languages)).toStrictEqual(Object.keys(languages));
    expect(objectKeys(languages)).toStrictEqual(["rust", "swift", "js"]);
  });
});
