import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Click Me',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: "Can't Click Me",
    disabled: true,
};