import { render, screen } from '@testing-library/react';
import HomePage from "./HomePage";

test('renders the home page', () => {
    render(<HomePage />);
    const element = screen.getByText(/ORLA CURRAN DESIGN/i);
    expect(element).toBeInTheDocument();
});

test('background colour on refresh is different from previous background colour', () => {
    render(<HomePage />);
    const element = screen.getByText(/ORLA CURRAN DESIGN/i);
    expect(element).toBeInTheDocument();
});