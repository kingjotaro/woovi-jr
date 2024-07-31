import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PaymentModal from './PaymentModal';

const meta: Meta<typeof PaymentModal> = {
  title: 'Payment Options/PaymentModal',
  component: PaymentModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    setPaymentAmount: { action: 'setPaymentAmount' },
    paymentAmount: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof PaymentModal>;

const Template: Story = {
  render: (args) => {
    const [paymentAmount, setPaymentAmount] = useState(args.paymentAmount || '');

    return (
      <PaymentModal
        {...args}
       
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    isOpen: true,
    paymentAmount: "1000000",
    
  },
};

export const Closed: Story = {
  ...Template,
  args: {
    isOpen: false,
    paymentAmount: '10000',
  },
};
