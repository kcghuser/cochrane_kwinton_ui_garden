import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders card', () => {
    render(<Card title="Card Title" content="This is the card content." />);
    expect(screen.getByText(/Card Title/i)).toBeVisible();
});