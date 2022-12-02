import { render, screen, fireEvent} from "@testing-library/react";
import ButtonTestAdd from "../../../components/button/homepage/ButtonTestAdd";

describe("ButtonTestAdd", () => {
    it("should render button", () => {
        render(<ButtonTestAdd />);
    })

    it("should call render addbutton", () => {
        render(<ButtonTestAdd />);
        const listbutton = screen.getAllByRole("button");
        const firstbutton = listbutton[0];
        fireEvent.click(firstbutton);
        // eslint-disable-next-line
        const listbuttonafter = screen.getAllByRole('button');
        expect(firstbutton.textContent).toBe("");
    })

})