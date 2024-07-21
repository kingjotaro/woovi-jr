function calculatePixInstallments(initialAmount, totalMonths, monthlyDiscountRate) {
    function formatNumber(number) {
        return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    let currentAmount = initialAmount;
    const results = [];

    for (let month = 1; month <= totalMonths ; month++) {
        if (month < totalMonths) {
            
            let txdiscount = (0.03 - ((totalMonths- month) * monthlyDiscountRate));
        

            let discount = initialAmount * txdiscount;
            console.log(discount, month);
            currentAmount = initialAmount - discount;
            console.log(currentAmount, month);
            
            
           
        } else {
            const formattedInitialAmount = formatNumber(initialAmount);
           

            const finalInstallment = {
                title: 'Pix Parcelado',
                installment: totalMonths,
                amount: formatNumber(initialAmount / totalMonths),
                cet: formattedInitialAmount
            };

            results.push(finalInstallment);

            return results;
        }

        currentAmount = Math.round(currentAmount * 100) / 100;

        const formattedCet = formatNumber(currentAmount);
        const installment = {
            title: 'Pix Parcelado',
            installment: totalMonths- month ,
            amount: formatNumber(currentAmount / (totalMonths- month)),
            cet: formattedCet,
        };

        results.unshift(installment);
    }
    return results;
}

export default calculatePixInstallments;

