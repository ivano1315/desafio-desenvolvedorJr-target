/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;
*/

const myJson = require('./faturamento.json');



let menorValor = 0;
let maiorValor = 0;
let diasMedia = 0;
let mediaMes = 0;
let total = 0;



/*obter media*/
for (let i = 0; i < myJson.length; i++) {
    total = total + myJson[i].valor;

}

mediaMes = total / myJson.length

/*obter maior e menor valor*/
menorValor = myJson[1].valor;

for (let i = 0; i < myJson.length; i++) {

    /*maior valor*/
    if (myJson[i].valor > maiorValor) {
        maiorValor = myJson[i].valor;
    }

    /*menor valor*/
    if (myJson[i].valor < menorValor) {
        menorValor = myJson[i].valor
    }

    /*media*/
    if (myJson[i].valor > mediaMes) {
        diasMedia = diasMedia + 1
    }



}


console.log('Maior valor: '+ maiorValor)
console.log('Menor valor: '+ menorValor)
console.log('Dias acima da média: '+ diasMedia)


