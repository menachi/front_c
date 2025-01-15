import '@testing-library/jest-dom'; // Import jest-dom here
import { render, screen } from '@testing-library/react';


const MyComponent = () => {
    return <div>test React</div>;
}

test('renders component with correct text', () => {
    render(<MyComponent />);
    const linkElement = screen.getByText(/test/i); // Find an element with the text "learn"
    expect(linkElement).toBeInTheDocument();
});