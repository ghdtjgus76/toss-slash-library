import { assert } from "./assert";

describe("assert 함수", () => {
  it("condition이 만족되지 않은 경우 에러를 throw해야 합니다.", () => {
    const value: string = "string";

    expect(() => assert(value === "string1")).toThrowError(Error);
  });

  it("condition이 만족되지 않은 경우, 인자로 전달된 에러 메시지로 구성된 에러를 throw해야 합니다.", () => {
    const value = false;

    expect(() => assert(value, "error message")).toThrowError(
      new Error("error message")
    );
  });

  it("condition이 만족된 경우 에러를 throw하지 않아야 합니다.", () => {
    const value = true;

    expect(() => assert(value)).not.toThrowError();
  });
});
