import { sampleElement } from "./sampleElement";

export default describe("sample 함수", () => {
  it("빈 배열인 경우 실행 결과로 undefined를 반환합니다.", () => {
    expect(sampleElement([])).toEqual(undefined);
  });

  it("길이가 1 이상인 배열은 배열 값들 중 임의의 값을 반환합니다.", () => {
    const arr = [1, 2, 3];

    expect(arr).toContain(sampleElement(arr));
  });
});
