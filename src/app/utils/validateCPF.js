export default function isValidCPF(cpf) {
   
    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
    function calculateDigit (digits) {
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum += digits[i] * (digits.length + 1 - i);
      }
      let remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };
  
    // Calcula os dois dígitos verificadores
    const digits = cpf.split('').map(Number);
    const firstDigit = calculateDigit(digits.slice(0, 9));
    const secondDigit = calculateDigit(digits.slice(0, 9).concat(firstDigit));
  
    return digits[9] === firstDigit && digits[10] === secondDigit;
  };
  