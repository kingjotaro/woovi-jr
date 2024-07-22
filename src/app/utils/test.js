
  function ReInstallmentPix(
    initialAmount,
    actuallInstallment,
    monthlyDiscountRate
  ) {
    const totalMonths = 12;
  
    let currentAmount = 0;
    const results = [];
  
    function formatNumber(number) {
      return number.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  
    for (let counter = 1; counter <= totalMonths; counter++) {
      if (counter <= totalMonths) {
        if (counter <= actuallInstallment) {
          let simpleInterest = initialAmount * (monthlyDiscountRate * ( actuallInstallment- counter));
          let newAmount = initialAmount - simpleInterest;
          let installment = newAmount / counter;
          currentAmount = newAmount;
        }
        if (counter > actuallInstallment) {
          let simpleInterest =
            initialAmount *
            (monthlyDiscountRate * (actuallInstallment - counter));
          let newAmount = initialAmount - simpleInterest;
          let installment = newAmount / actuallInstallment;
          currentAmount = newAmount;
        }
      }
      const installment = {
        title: "Pix Parcelado",
        installment: counter,
        amount: `${formatNumber(currentAmount / counter)}`,
        cet: currentAmount,
      };
      results.push(installment);
    }
    return results;
  }
  
  let initialAmount = 23400;
  let monthlyDiscountRate = 0.0025;
  let actuallInstallment = 2;
  
  let test = ReInstallmentPix(
    initialAmount,
    actuallInstallment,
    monthlyDiscountRate
  );
  console.log(test);
  