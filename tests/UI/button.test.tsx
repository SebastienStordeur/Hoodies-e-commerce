import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, queryByAttribute, render } from "@testing-library/react";
import Button from "../../components/UI/Button";

describe("Button component tests", () => {
  const onClickFunction = jest.fn();
  const { getByText, getByTestId } = render(
    <Button id="button-id" onClick={onClickFunction}>
      Click
    </Button>
  );

  const button = getByText("Click");

  it("Renders correctly", () => {
    expect(button).toBeInTheDocument();
  });

  it("Should have Click as an inner text", () => {
    expect(button).toHaveTextContent("Click");
  });

  /*   it("Should have a button id", () => {
    expect(queryByAttribute(null, "id")).toBeInTheDocument();
  }); */

  /** This works if tests above are commented */
  it("Should trigger an action on click", () => {
    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalled();
  });
});
