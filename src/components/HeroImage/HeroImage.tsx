import React from 'react';
import styled from 'styled-components';

export const HeroImage = ({ src, alt }: HeroImageProps) => {
    return <StyledHeroImage src={src} alt={alt} />;
};

const StyledHeroImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export interface HeroImageProps {
    src: string;
    alt: string;
}