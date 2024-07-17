function calculateProgressiveDiscount(initialAmount, months, monthlyDiscountRate) {
    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    let currentAmount = initialAmount;
    const results = [];

    for (let i = 2; i <= months; i++) {
        if (i < months) {
            currentAmount = initialAmount - (initialAmount * (i * monthlyDiscountRate));
        } else {
            const formattedAmount = formatarNumero(initialAmount);
            const formattedSpecialAmount = formatarNumero(initialAmount - (initialAmount * 0.03));

            const installment = {
                title: 'Pix Parcelado',
                installment: 12,
                amount: formatarNumero(initialAmount / months),
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

        const cetFormatted = formatarNumero(currentAmount);
        const installment = {
            title: 'Pix Parcelado',
            installment: months - i + 1,
            amount: `${formatarNumero(currentAmount / (months - i + 1))}`,
            cet: cetFormatted
        };

        results.unshift(installment);
    }
    return results;
}

export default calculateProgressiveDiscount;
