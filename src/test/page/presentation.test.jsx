import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Presentation from "../../page/Presentation"

describe("Presentation", () => {
  it("should render the presentation", () => {
    render(<Router><Presentation/></Router>);
  });
});