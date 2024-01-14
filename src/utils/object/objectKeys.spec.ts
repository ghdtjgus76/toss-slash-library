import { objectKeys } from "./objectKeys";

export default describe("objectKeys", () => {
  it("objectKeys 함수의 실행 결과는 Object.Keys() 함수의 실행 결과와 동일해야 합니다.", () => {
    const languages = {
      rust: 1,
      swift: 2,
      js: 3,
    } as const;

    expect(objectKeys(languages)).toStrictEqual(Object.keys(languages));
    expect(objectKeys(languages)).toStrictEqual(["rust", "swift", "js"]);
  });
});
