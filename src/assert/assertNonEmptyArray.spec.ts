import { assertNonEmptyArray } from "./assertNonEmptyArray";

export default describe("assertNonEmptyArray 함수", () => {
  it("빈 배열인 경우 에러를 발생시킨다.", () => {
    const arr: number[] = [];

    expect(() => assertNonEmptyArray(arr)).toThrowError();
  });

  it("길이가 1 이상인 배열은 정상 동작한다.", () => {
    const arr = [1, 2, 3];

    expect(() => assertNonEmptyArray(arr)).not.toThrowError();
  });
});
