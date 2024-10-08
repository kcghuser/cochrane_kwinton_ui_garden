import { render, screen } from '@testing-library/react';
import { Img } from './Img';

test('renders image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    expect(screen.getByAltText(/Placeholder/i)).toBeVisible();
});