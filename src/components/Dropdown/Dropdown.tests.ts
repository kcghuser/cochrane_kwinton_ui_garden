import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('renders dropdown', () => {
    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} onChange={() => {}} />);
    expect(screen.getByText(/Option 1/i)).toBeVisible();
});