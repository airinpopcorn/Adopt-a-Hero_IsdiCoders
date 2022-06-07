/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Given my AppUI', () => {
    // const mockTitle = {

    // value: 'Marvel'
    // }

    describe('When rendering', () => {
        test('It should display the title', () => {
            render(<App />);
            const linkElement = screen.getByText(/Marvel/i);
            expect(linkElement).toBeInTheDocument();
        });
    });
});

// test('renders learn react link', () => {
//   render(<AppUI />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
