import { arrayIncludes } from "./arrayIncludes";

export default describe("arrayIncludes 함수", () => {
  let arr: Array<"a" | "b" | "c">;

  beforeEach(() => {
    arr = ["a", "b", "c"];
  });

  it("주어진 배열에 있는 요소라면 별다른 타입 선언/단언 없이 true를 반환합니다.", () => {
    let includedElement = "a";

    expect(arrayIncludes(arr, includedElement)).toBe(true);
  });

  it("주어진 배열에 없는 요소라면 false를 반환합니다.", () => {
    let excludedElement = "d";

    expect(arrayIncludes(arr, excludedElement)).toBe(false);
  });

  it("fromIndex를 입력하면 해당 인덱스 이후부터 주어진 배열에 있는 요소인지 확인 후 결과를 반환합니다.", () => {
    let element = "a";

    expect(arrayIncludes(arr, element, 0)).toBe(true);
    expect(arrayIncludes(arr, element, 1)).toBe(false);
  });
});
