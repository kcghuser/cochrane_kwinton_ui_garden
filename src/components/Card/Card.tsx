import React from 'react';
import styled from 'styled-components';

export const Card = ({ title, content }: CardProps) => {
    return (
        <StyledCard>
            <h2>{title}</h2>
            <p>{content}</p>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
`;

export interface CardProps {
    title: string;
    content: string;
}