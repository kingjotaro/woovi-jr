function InstallmentPix(initialAmount, monthlyDiscountRate) {
    const totalMonths = 12;

    function formatNumber(number) {
        return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    let currentAmount = initialAmount;
    const results = [];

    for (let i = 2; i <= totalMonths; i++) {
        if (i < totalMonths) {
            currentAmount = initialAmount - (initialAmount * (i * monthlyDiscountRate));
            console.log(currentAmount)
        } else {
            const formattedAmount = formatNumber(initialAmount);
            const formattedSpecialAmount = formatNumber(initialAmount - (initialAmount * 0.03));

            const installment = {
                title: 'Pix Parcelado',
                installment: totalMonths,
                amount: formatNumber(initialAmount / totalMonths),
                cet: formattedAmount
            };

            const installment2 = {
                title: 'Pix',
                installment: 1,
                amount: formattedAmount,
                cet: formattedSpecialAmount
            };

            results.unshift(installment2);
            results.push(installment);

            return results;
        }

        currentAmount = Math.round(currentAmount * 100) / 100;

        const cetFormatted = formatNumber(currentAmount);
        const installment = {
            title: 'Pix Parcelado',
            installment: totalMonths - i + 1,
            amount: `${formatNumber(currentAmount / (totalMonths - i + 1))}`,
            cet: cetFormatted
        };

        results.unshift(installment);
    }
    return results;
}

export default InstallmentPix;
