import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransactionProvider } from '../../pixcontext';
import Pix from './Pix';

const meta: Meta<typeof Pix> = {
  title: 'Components/Pix',
  component: Pix,
  decorators: [
    (Story) => (
      <TransactionProvider>
        <Story />
      </TransactionProvider>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    amount: { control: 'text' },
    cashback: { control: 'text' },
    cashbackAmount: { control: 'text' },
    isSelected: { control: 'boolean' },
    onClick: { action: 'clicked' },
    cet: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Pix>;

export const Default: Story = {
  args: {
    title: 'Pix',
    amount: '100,00',
    cashback: '10%',
    cashbackAmount: '10,00',
    isSelected: false,
    cet: '15.00',
  },
};

export const Selected: Story = {
  args: {
    title: 'Pix',
    amount: '200,00',
    cashback: '20%',
    cashbackAmount: '40,00',
    isSelected: true,
    cet: '12.50',
  },
};
