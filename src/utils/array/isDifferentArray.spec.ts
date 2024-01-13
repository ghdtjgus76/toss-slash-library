import { isDifferentArray } from "./isDifferentArray";

export default describe("isDifferentArray 함수", () => {
  it("길이가 다른 배열은 실행 결과로 true를 반환합니다.", () => {
    const arr1 = [1];
    const arr2 = [2, 3];

    expect(isDifferentArray(arr1, arr2)).toBe(true);
  });

  it("길이가 같지만 값이 다른 배열은 실행 결과로 true를 반환합니다.", () => {
    const arr1 = [1, 2];
    const arr2 = [1, 3];

    expect(isDifferentArray(arr1, arr2)).toBe(true);
  });

  it("길이가 같지만 내부 객체 값이 다른 배열은 실행 결과로 true를 반환합니다.", () => {
    const arr1 = [{ value: 1 }, { value: 2 }];
    const arr2 = [{ value: 1 }, { value: 3 }];

    expect(isDifferentArray(arr1, arr2)).toBe(true);
  });

  it("동일한 배열은 실행 결과로 false를 반환합니다.", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(isDifferentArray(arr1, arr2));
  });

  it("NaN, 0과 같은 예외 케이스도 올바른 비교 값을 반환합니다.", () => {
    const arr1 = [NaN, -0];
    const arr2 = [NaN, +0];

    expect(isDifferentArray(arr1, arr2)).toBe(true);
  });
});
