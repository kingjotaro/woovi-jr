import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Installment from './Installment';
import { TransactionProvider } from '../../pixcontext';


const meta: Meta<typeof Installment> = {
  title: 'Components/Installment',
  component: Installment,
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
    cet: { control: 'text' },
    isSelected: { control: 'boolean' },
    onClick: { action: 'clicked' },
    index: { control: 'number' },
    totalItems: { control: 'number' },
    installment: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Installment>;

const Template: Story = {
  render: (args) => {


  

    return (
      <Installment
        {...args}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    title: 'A vista ',
    amount: "100,000",
    cet: "120,000",
    isSelected: true,
    index: 2,
    totalItems: 3,
    installment: 1,
  },
};

export const Selected: Story = {
  ...Template,
  args: {
    title: 'A vista ',
    amount: '100,00',
    cet: '120,00',
    isSelected: true,
    index: 1,
    totalItems: 3,
    installment: 2,
  },
};

export const CustomData: Story = {
  ...Template,
  args: {
    title: 'Special Installment',
    amount: '200,00',
    cet: '250,00',
    isSelected: false,
    index: 2,
    totalItems: 5,
    installment: 3,
  },
};
