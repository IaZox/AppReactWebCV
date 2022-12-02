import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../page/Home"

describe("Home", () => {
  it("should render the home page", () => {
    render(<Router><Home /></Router>);
  });
});