import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

export default describe("ScreenReaderOnly", () => {
  it("적절한 스타일이 적용되어야 합니다.", () => {
    const { getByText } = render(<ScreenReaderOnly>토스</ScreenReaderOnly>);
    const fixture = getByText("토스");

    expect(fixture).toHaveStyle({
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0px",
      margin: "-1px",
      borderWidth: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    });

    expect(fixture).not.toHaveStyle({
      position: "relative",
    });
  });

  it("자식 요소를 잘 렌더링해야합니다.", () => {
    render(<ScreenReaderOnly>토스</ScreenReaderOnly>);

    expect(screen.getByText("토스")).toBeInTheDocument();
    expect(screen.queryByText("toss")).not.toBeInTheDocument();
  });

  it("다른 속성도 받아와야 합니다.", () => {
    const { getByText } = render(
      <ScreenReaderOnly aria-live="polite">토스</ScreenReaderOnly>
    );
    const fixture = getByText("토스");

    expect(fixture.getAttribute("aria-live")).toEqual("polite");
    expect(fixture.getAttribute("aria-live")).not.toEqual("off");
  });
});
