import { pick } from "./pick";

export default describe("pick", () => {
  let country: Record<"KR" | "US" | "JP", string>;

  beforeEach(() => {
    country = {
      KR: "KR",
      US: "US",
      JP: "JP",
    } as const;
  });

  it("주어진 객체에 있는 키 값으로 이루어진 배열 전달 시 해당 키와 값으로 이루어진 객체를 반환합니다.", () => {
    expect(pick(country, ["JP"])).toStrictEqual({
      JP: "JP",
    });
  });

  it("키 값 배열에 빈 배열 전달 시 실행 결과로 빈 객체를 반환합니다.", () => {
    expect(pick(country, [])).toStrictEqual({});
  });
});
