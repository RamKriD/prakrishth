import React from "react";
import "@testing-library/jest-dom";
import {
  screen,
  render,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";

import Header from "../../../../client/src/layout/header/Header";

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

describe("Header component", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Header />
      </BrowserRouter>
    );
  });
  test("Header should load and have heading", () => {
    const message = "Prakrishth";

    expect(screen.getAllByText(message)).toBeTruthy();
  });
  test("Language icon should be clickable and open", () => {
    const role = "language";
    const ele = screen.getByRole(role);
    expect(ele).toBeTruthy();
    fireEvent(
      ele,
      new MouseEvent("click", {
        bubbles: true,
      })
    );
    const langBut = screen.getByText("हिन्दी").parentElement;
    expect(langBut).toBeVisible();
    fireEvent(
      langBut,
      new MouseEvent("click", {
        bubbles: true,
      })
    );
  });
});
