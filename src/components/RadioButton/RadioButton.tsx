import React from 'react';
import styled from 'styled-components';

export const RadioButton = ({ label, name, value, onChange }: RadioButtonProps) => {
    return (
        <StyledLabel>
            <input type="radio" name={name} value={value} onChange={onChange} />
            {label}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
`;

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}