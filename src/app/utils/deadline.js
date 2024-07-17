export function generatePaymentDeadline() {
    const addLeadingZero = (number) => {
      return number < 10 ? `0${number}` : number;
    };
  
    const initialTimestamp = Math.floor(Date.now() / 1000);
    const date = new Date(initialTimestamp * 1000);
    date.setHours(date.getHours() + 1);
  
    return `
      Prazo de pagamento: 
      ${addLeadingZero(date.getDate())}/${addLeadingZero(date.getMonth() + 1)}/${date.getFullYear()} - 
      ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}
    `;
  }
  