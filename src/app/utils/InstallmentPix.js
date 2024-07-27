function InstallmentPix(initialAmountInCents, monthlyDiscountRate) {
    const totalMonths = 12;

    function formatNumber(number) {
        return (number / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    let currentAmount = initialAmountInCents;
    const results = [];

    for (let i = 2; i <= totalMonths; i++) {
        if (i < totalMonths) {
            currentAmount = initialAmountInCents - Math.round(initialAmountInCents * (i * monthlyDiscountRate));
        } else {
            const formattedAmount = formatNumber(initialAmountInCents);
            const formattedSpecialAmount = formatNumber(initialAmountInCents - Math.round(initialAmountInCents * 0.03));

            const installment = {
                title: 'Pix Parcelado',
                installment: totalMonths,
                amount: formatNumber(Math.round(initialAmountInCents / totalMonths)),
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

        currentAmount = Math.round(currentAmount);

        const cetFormatted = formatNumber(currentAmount);
        const installment = {
            title: 'Pix Parcelado',
            installment: totalMonths - i + 1,
            amount: formatNumber(Math.round(currentAmount / (totalMonths - i + 1))),
            cet: cetFormatted
        };

        results.unshift(installment);
    }
    return results;
}

export default InstallmentPix;
