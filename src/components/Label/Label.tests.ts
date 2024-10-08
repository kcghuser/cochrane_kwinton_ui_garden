import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
    it('should be visible', () => {
        render(<Label text="Label Text" disabled={false} />);
        const label = screen.getByText(/Label Text/i);
        expect(label).toBeVisible();
    });

    it('should change color when disabled', () => {
        render(<Label text="Disabled Label" disabled={true} />);
        const label = screen.getByText(/Disabled Label/i);
        expect(label).toHaveStyle('color: grey');
    });
});