import { render, screen } from "@testing-library/react";
import Login from "../../page/Login"

describe("Login", () => {
  it("should render the Login", () => {
    render(<Login />);
  });
});