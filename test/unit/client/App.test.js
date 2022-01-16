import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import App from "../../../client/src/App";

describe("App component", () => {
  beforeAll(() => {
    render(<App />);
  });

  test("should have the right message in the dom", () => {
    const message = "Prakrishth";

    expect(screen.getAllByText(message)).toBeTruthy();
  });

  afterAll(cleanup);
});
