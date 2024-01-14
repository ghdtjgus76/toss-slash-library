import { objectEntries } from "./objectEntries";

export default describe("objectEntries 함수", () => {
  it("objectEntries 함수 실행 결과로 Object.entries() 함수의 실행 결과가 동일해야 합니다.", () => {
    const languages = {
      rust: 1,
      swift: 2,
      js: 3,
    } as const;

    expect(objectEntries(languages)).toStrictEqual(Object.entries(languages));
    expect(objectEntries(languages)).toStrictEqual([
      ["rust", 1],
      ["swift", 2],
      ["js", 3],
    ]);
  });
});
