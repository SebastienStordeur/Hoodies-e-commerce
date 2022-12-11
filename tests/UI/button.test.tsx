import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "../../components/UI/Button";

describe("Button component tests", () => {
  const onClickFunction = jest.fn();
  const { getByText } = render(
    <Button id="button-id" onClick={onClickFunction}>
      Click
    </Button>
  );

  const button = getByText("Click");

  it("Should render correctly", () => {
    expect(button).toBeInTheDocument();
  });

  it("Should have Click as an inner text", () => {
    expect(button).toHaveTextContent("Click");
  });

  it("Should have a button id", () => {
    expect(button.id).not.toBeNull();
  });

  /** This works if tests above are commented */
  it("Should call the onClickFunction prop when clicked", () => {
    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalled();
  });
});
