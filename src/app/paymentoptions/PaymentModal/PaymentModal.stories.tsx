import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import PaymentModal, { PaymentModalProps } from './PaymentModal';

export default {
  title: 'Components/PaymentModal',
  component: PaymentModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    onSubmit: { action: 'submitted' },
    setPaymentAmount: { action: 'setPaymentAmount' },
    paymentAmount: { control: 'text' },
  },
} as Meta;

const Template: Story<PaymentModalProps> = (args: any) => {
  const [paymentAmount, setPaymentAmount] = useState(args.paymentAmount);

  return (
    <PaymentModal
      {...args}
      paymentAmount={paymentAmount}
      setPaymentAmount={setPaymentAmount}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  paymentAmount: '10000', // Example amount in cents
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  paymentAmount: '10000', // Example amount in cents
};
