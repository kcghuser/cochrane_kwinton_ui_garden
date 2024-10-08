import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('renders hero image', () => {
    render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero Placeholder" />);
    expect(screen.getByAltText(/Hero Placeholder/i)).toBeVisible();
});