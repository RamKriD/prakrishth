import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeAll(() => {
    render(<App />);
  });

  test("should have the right message in the dom", () => {
    const message = "Prakrishth";

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
