import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByText(/Click Me/i)).toBeVisible();
});

test('button is disabled', () => {
    render(<Button text="Can't Click Me" onClick={() => {}} disabled />);
    expect(screen.getByText(/Can't Click Me/i)).toHaveStyle('background-color: grey');
});