import { chunk } from "./chunk";

export default describe("chunk 함수", () => {
  it("주어진 배열이 빈 배열이면 결과로 빈 배열을 반환합니다.", () => {
    expect(chunk([], 3)).toStrictEqual([]);
  });

  it("size가 1보다 작으면 결과로 빈 배열을 반환합니다.", () => {
    expect(chunk([1, 2, 3], -1)).toStrictEqual([]);
  });

  it("주어진 배열을 size 길이를 가진 배열로 나누어 반환합니다.", () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
