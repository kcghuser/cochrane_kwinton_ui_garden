import React from 'react';
import styled from 'styled-components';

export const Img = ({ src, alt }: ImgProps) => {
    return <StyledImage src={src} alt={alt} />;
};

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export interface ImgProps {
    src: string;
    alt: string;
}