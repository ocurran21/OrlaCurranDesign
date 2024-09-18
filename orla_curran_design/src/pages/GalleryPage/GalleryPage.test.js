import {act} from "react";
import {render, screen} from "@testing-library/react";
import GalleryPage from "./GalleryPage";

test('should render the gallery page', async () => {
    await act(async () => {
        render(<GalleryPage/>);
    });
});