import React from "react";
import { render, screen } from "@testing-library/react";
import CustomTextFieldForJobLocationForJobListPage from "./CustomTextFieldForJobLocationForJobListPage";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CustomTextFieldForJobLocationForJobListPage placeholder = "sachin"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
