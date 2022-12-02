import ButtonHeaderLeft from "../../../components/button/homepage/ButtonHeaderLeft";
import { render, screen } from "@testing-library/react";

describe("ButtonheaderLeft", () => {
  it("should render the button", () => {
    render(<ButtonHeaderLeft />);
  });

  it("should return the good className", () => {
    render(<ButtonHeaderLeft name="testName" />);
    const button = screen.getByRole("button");
    expect(button.className).toBe("Header_button_left")
  });
  it("should return the good Type", () => {
    render(<ButtonHeaderLeft name="testName" />);
    const button = screen.getByRole("button");
    expect(button.type).toBe("button")
  });
  it("should return the good Value", () => {
    render(<ButtonHeaderLeft name="testName" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("testName")
  });


});
