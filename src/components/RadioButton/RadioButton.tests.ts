import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

test('renders radio button', () => {
    render(<RadioButton label="Option A" name="example" value="A" onChange={() => {}} />);
    expect(screen.getByLabelText(/Option A/i)).toBeVisible();
});