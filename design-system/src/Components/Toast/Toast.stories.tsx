import React from 'react';
import { Toast } from './Toast';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    message: 'This is an info toast!',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'Saved successfully!',
    type: 'success',
  },
};

export {}; 
