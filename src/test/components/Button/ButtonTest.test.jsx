import { render, screen, fireEvent} from "@testing-library/react";
import ButtonTest from "../../../components/button/homepage/ButtonTest";

describe("ButtonTest", () => {
    it("should render button", () => {
        render(<ButtonTest />);
    })

    it("should have a good text", () => {
        render(<ButtonTest />);
        // eslint-disable-next-line
        const text = document.querySelector('p')
        expect(text.textContent).toBe("You clicked 0 times")
    })

    it("should have a good Firstbutton text", () => {
        render(<ButtonTest />);
        // eslint-disable-next-line
        const buttons = screen.getAllByRole("button");
        const firstbutton = buttons[0];
        expect(firstbutton.textContent).toBe("Click me")
    })

    it("should call Setcount() ++", () => {
        render(<ButtonTest />);
        const buttons = screen.getAllByRole("button");
        const firstbutton = buttons[0];
        fireEvent.click(firstbutton);
        // eslint-disable-next-line
        const text = document.querySelector('p')
        expect(text.textContent).toBe("You clicked 1 times")
    })

    it("should call reset Setcount()", () => {
        render(<ButtonTest />);
        const buttons = screen.getAllByRole("button");
        const secondbutton = buttons[1];
        fireEvent.click(secondbutton);
        // eslint-disable-next-line
        const text = document.querySelector('p')
        expect(text.textContent).toBe("You clicked 0 times")
    })

})