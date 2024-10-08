import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
    it('should be visible', () => {
        render(<Text content="This is a text component." disabled={false} />);
        const text = screen.getByText(/This is a text component./i);
        expect(text).toBeVisible();
    });

    it('should change color when disabled', () => {
        render(<Text content="This text is disabled." disabled={true} />);
        const text = screen.getByText(/This text is disabled./i);
        expect(text).toHaveStyle('color: grey');
    });
});