import { render, screen } from '@testing-library/react';
import { act } from 'react';

import HomePage, {dynamicClassName} from "./HomePage";
import {COLOURS} from "../../constants/colours";

describe('HomePageComponent', () => {
    test('should render the home page and title is displayed', async () => {
        await act(async () => {
            render(<HomePage/>);
        });

        const element = await screen.findByText(/ORLA CURRAN DESIGN/i);
        expect(element).toBeInTheDocument();
    });
})

describe('getRandomColours()', () => {
    test('should return a value from colourList', async () => {

    });
})

describe('dynamicClassName()', () => {
    test('when currentColours is null should return defaultStyle', () => {
        const result = dynamicClassName();
        expect(result).toBe("defaultStyle");
    });

    test('when currentColours is "#e13232" should return redStyle', () => {
        const result = dynamicClassName(COLOURS.redStyle);
        expect(result).toBe("redStyle");
    });

    test('when currentColours is "#0d4647" should return tealStyle', () => {
        const result = dynamicClassName(COLOURS.tealStyle);
        expect(result).toBe("tealStyle");
    });
})
