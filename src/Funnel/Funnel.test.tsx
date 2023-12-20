import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Funnel, Step } from "./Funnel";
import { NonEmptyArray } from "./models";

const steps: NonEmptyArray<string> = ["Step1", "Step2", "Step3"];

describe("Funnel Component", () => {
  it("renders the correct step", () => {
    render(
      <Funnel steps={steps} step={"Step2"}>
        <Step name="Step1">Step1</Step>
        <Step name="Step2">Step2</Step>
        <Step name="Step3">Step3</Step>
      </Funnel>
    );

    expect(screen.getByText("Step2")).toBeInTheDocument();
  });
});
