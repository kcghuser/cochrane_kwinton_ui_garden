import React from 'react';
import { Label } from './Label';

export default {
    title: 'Label',
    component: Label,
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Label Text',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Disabled Label',
    disabled: true,
};