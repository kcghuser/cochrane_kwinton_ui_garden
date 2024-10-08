import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ disabled?: boolean }>`
    background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
    color: white;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: ${(props) => (props.disabled ? 'grey' : 'darkblue')};
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;