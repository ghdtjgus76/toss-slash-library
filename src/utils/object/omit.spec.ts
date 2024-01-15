import { omit } from "./omit";

export default describe("omit 함수", () => {
  let country: Record<"KR" | "US" | "JP", string>;

  beforeEach(() => {
    country = {
      KR: "KR",
      US: "US",
      JP: "JP",
    } as const;
  });

  it("빈 배열을 전달할 경우 주어진 객체 그대로를 반환합니다.", () => {
    expect(omit(country, [])).toStrictEqual(country);
  });

  it("주어진 객체에 존재하는 키 값으로 이루어진 배열 전달 시 해당 키를 제외한 나머지 키 값으로 이루어진 객체를 반환합니다.", () => {
    expect(omit(country, ["KR"])).toStrictEqual({
      US: "US",
      JP: "JP",
    });
  });
});
