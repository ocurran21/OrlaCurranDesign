import { render } from '@testing-library/react';
import { act } from 'react';
import SidebarComponent from "./SidebarComponent";

describe('SidebarComponent', () => {
    test('should render the sidebar component', async () => {
        await act(async () => {
            render(<SidebarComponent/>);
        });
    });
})

describe('', () => {
    test('', async () => {

    });
})
