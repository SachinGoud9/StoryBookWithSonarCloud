import React from "react";
import { render, screen } from "@testing-library/react";
import CustomTextFieldForJobSearchForJobListPage from "./CustomTextFieldForJobSearchForJobListPage";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CustomTextFieldForJobSearchForJobListPage placeholder = "sachin"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
