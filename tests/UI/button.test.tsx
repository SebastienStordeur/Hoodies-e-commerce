import React from "react";
import { render } from "@testing-library/react";
import Button from "../../components/UI/Button";

describe("Button component tests", () => {
  it("Renders correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });
});

/* test("button component is rendered correctly", () => {
  const { getByText } = render(<Button>Click me</Button>);

  expect(getByText("Click me")).toBeInTheDocument();
}); */
