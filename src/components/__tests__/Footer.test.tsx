import React from "react";
import "@testing-library/jest-dom";
import { Footer } from "../Footer";
import { render } from "@testing-library/react";

describe("Footer tests", () => {
  test("basic snapshot", () => {
    const { asFragment } = render(
      <Footer
        shouldDisableNext={() => {
          return false;
        }}
        shouldDisablePrev={() => {
          return false;
        }}
      ></Footer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
