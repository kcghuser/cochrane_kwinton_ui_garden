import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ content, disabled }) => {
    return <StyledText disabled={disabled}>{content}</StyledText>;
};

const StyledText = styled.p<{ disabled?: boolean }>`
    color: ${(props) => (props.disabled ? 'grey' : 'black')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;