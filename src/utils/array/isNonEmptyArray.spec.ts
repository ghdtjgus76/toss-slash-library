import { isNonEmptyArray } from "./isNonEmptyArray";

export default describe("isNonEmptyArray 함수", () => {
  it("빈 배열은 실행 결과로 false를 반환합니다.", () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  it("길이가 1 이상인 배열은 실행 결과로 true를 반환합니다.", () => {
    expect(isNonEmptyArray([1, 2])).toBe(true);
  });
});
