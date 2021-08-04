import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconInStorybook from "./IconInStorybook";
import CustomTextFieldForJobLocation from "./CustomTextFieldForJobLocation";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CustomTextFieldForJobLocation placeholder = "sachin"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
