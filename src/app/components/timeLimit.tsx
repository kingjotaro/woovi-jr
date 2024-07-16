import React, { useEffect, useState } from 'react';

const PaymentDeadline = () => {
  const [timestamp, setTimestamp] = useState(0);
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
   
    const initialTimestamp = Math.floor(Date.now() / 1000); 
    setTimestamp(initialTimestamp);

    const interval = setInterval(() => {
      const date = new Date(timestamp * 1000); 
      date.setHours(date.getHours() + 1);

     
      const formattedDeadline = `
        Prazo de pagamento: 
        ${addLeadingZero(date.getDate())}/${addLeadingZero(date.getMonth() + 1)}/${date.getFullYear()} - 
        ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}
      `;

      setDeadline(formattedDeadline);
    }, 1000); 

    return () => clearInterval(interval); 
  }, [timestamp]);


  const addLeadingZero = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  return <div>{deadline}</div>;
};

export default PaymentDeadline;
