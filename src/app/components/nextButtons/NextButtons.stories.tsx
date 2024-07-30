import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransactionProvider } from '../../pixcontext';
import NextButton from './NextButton';

const meta: Meta<typeof NextButton> = {
  title: 'Components/NextButton',
  component: NextButton,
  decorators: [
    (Story) => (
      <TransactionProvider>
        <Story />
      </TransactionProvider>
    ),
  ],
  argTypes: {
    isVisible: { control: 'boolean' },
    amount: { control: 'text' },
    installment: { control: 'number' },
    cet: { control: 'text' },
    idTransaction: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof NextButton>;

export const Default: Story = {
  args: {
    isVisible: true,
    amount: '1000',
    installment: 12,
    cet: '1050',
    idTransaction: 'transaction-id-123',
  },
};
