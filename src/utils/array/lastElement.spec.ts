import { lastElement } from "./lastElement";

export default describe("lastElement 함수", () => {
  it("길이가 1 이상인 배열은 실행 결과로 마지막 요소를 반환합니다.", () => {
    expect(lastElement([1, 2, 3])).toEqual(3);
  });

  it("빈 배열은 실행 결과로 undefined를 반환합니다.", () => {
    expect(lastElement([])).toEqual(undefined);
  });
});
