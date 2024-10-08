import React from 'react';
import { Text } from './Text';

export default {
    title: 'Text',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: 'This is a text component.',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    content: 'This text is disabled.',
    disabled: true,
};