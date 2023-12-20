import { render, RenderResult, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Funnel, Step } from "./Funnel";
import { NonEmptyArray } from "./models";

const steps: NonEmptyArray<string> = ["Step1", "Step2", "Step3"];

describe("퍼널 컴포넌트", () => {
  it("정상적으로 동작합니다.", () => {
    render(
      <Funnel steps={steps} step={"Step2"}>
        <Step name="Step1">Step1</Step>
        <Step name="Step2">Step2</Step>
        <Step name="Step3">Step3</Step>
      </Funnel>
    );

    expect(screen.getByText("Step2")).toBeInTheDocument();
  });

  it("타겟 스텝 컴포넌트를 찾지 못하면 에러를 발생시킵니다.", () => {
    expect.assertions(1);

    const renderWithAssertion = (): RenderResult => {
      return render(
        <Funnel steps={steps} step={"Step4"}>
          <Step name="Step1">Step1</Step>
          <Step name="Step2">Step2</Step>
          <Step name="Step3">Step3</Step>
        </Funnel>
      );
    };

    expect(() => renderWithAssertion()).toThrow(
      "Step4 스텝 컴포넌트를 찾지 못했습니다."
    );
  });
});

describe("스텝 컴포넌트", () => {
  it("처음 렌더링될 때 onEnter 함수가 호출됩니다.", () => {
    const onEnterMock = jest.fn();

    render(
      <Step name={"Step1"} onEnter={onEnterMock}>
        Step 1
      </Step>
    );

    expect(onEnterMock).toHaveBeenCalled();
  });

  it("children을 렌더링합니다.", () => {
    render(<Step name="Step1">Step 1</Step>);

    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });
});
