import React from 'react';
import { Typography } from './Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
    </>
  ),
};

export const Paragraph: Story = {
  render: () => <Typography variant="p">This is a paragraph</Typography>,
};

export {}; 
