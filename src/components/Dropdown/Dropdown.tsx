import React from 'react';
import styled from 'styled-components';

export const Dropdown = ({ options, onChange }: DropdownProps) => {
    return (
        <StyledSelect onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

const StyledSelect = styled.select`
    padding: 8px;
`;

export interface DropdownProps {
    options: Array<{ label: string; value: string }>;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}