import React from 'react';
import { Dropdown } from './Dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
];

export const Default = () => <Dropdown options={options} onChange={() => {}} />;