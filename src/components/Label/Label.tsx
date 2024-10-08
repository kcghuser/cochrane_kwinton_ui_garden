import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ text, disabled }) => {
    return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

const StyledLabel = styled.label<{ disabled?: boolean }>`
    color: ${(props) => (props.disabled ? 'grey' : 'black')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;