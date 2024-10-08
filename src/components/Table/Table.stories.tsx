import React from 'react';
import { Table } from './Table';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
    headers: { control: 'array' },
    footer: { control: 'array' },
  },
};

const Template: Story<any> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  data: [
    ['Cell 1-1', 'Cell 1-2', 'Cell 1-3'],
    ['Cell 2-1', 'Cell 2-2', 'Cell 2-3'],
  ],
  footer: ['Footer 1', 'Footer 2', 'Footer 3'],
  disabled: false,
};