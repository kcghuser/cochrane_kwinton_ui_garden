import React from 'react';
import { RadioButton } from './RadioButton';

export default {
    title: 'RadioButton',
    component: RadioButton,
};

export const Default = () => (
    <RadioButton label="Option A" name="example" value="A" onChange={() => {}} />
);