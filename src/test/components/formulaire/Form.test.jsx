import { render, screen, fireEvent} from "@testing-library/react";
import Formulaire from "../../../components/formulaire/Form";

describe("Formlaire", () => {
    it("should render button", () => {
        render(<Formulaire />);
    })

    it("should call render form", () => {
        render(<Formulaire />);
        // eslint-disable-next-line
        const button = document.querySelector('button')
        fireEvent.click(button);
        // eslint-disable-next-line
        const text = document.querySelector('p')
        expect(text.textContent).toBe("a")

    })

})