import React from 'react';
import { HeroImage } from './HeroImage';

export default {
    title: 'HeroImage',
    component: HeroImage,
};

export const Default = () => (
    <HeroImage src="https://via.placeholder.com/800x400" alt="Hero Placeholder" />
);