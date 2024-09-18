import {act} from "react";
import {render, screen} from "@testing-library/react";
import AboutPage from "./AboutPage";

test('should render the gallery page', async () => {
    await act(async () => {
        render(<AboutPage/>);
    });
});