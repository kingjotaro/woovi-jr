const calcularDescontoProgressivo = (valorInicial, meses) => {
    const taxaDescontoMensal = 0.0025;
    let valorAtual = valorInicial;
    const resultados = [];

    for (let i = 2; i <= meses; i++) { 
        if (i < meses) {
            valorAtual = valorInicial - (valorInicial * (i * taxaDescontoMensal));
        } else {
            const installment = {
                
                    title: 'Pix',
                    amount: `${meses}x R$ ${valorInicial/meses},00`,
                    cet: `Total: R$ ${valorInicial}.00`
                  
            };

            const installment2 = {
                
                title: 'Pix',
                amount: `1x R$ ${valorInicial},00`,
                cet: `Total: R$ ${valorInicial- (valorInicial*0.03)}.00`
              
        };

            resultados.unshift(installment2);
            resultados.push(installment);

            return resultados

    
        }

        valorAtual = Math.round(valorAtual * 100) / 100;

        const installment = {
            title: 'Pix',
            amount: `${meses-i+1}x R$ ${(Math.round(valorAtual/(meses-i+1)*100)/100).toFixed(2)}`,
           
            cet: `Total: R$ ${valorAtual.toFixed(2)}`
        };

        resultados.unshift(installment);
    }

    return resultados;
};




export default calcularDescontoProgressivo;