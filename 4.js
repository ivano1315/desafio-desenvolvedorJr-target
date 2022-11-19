/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que 
cada estado teve dentro do valor total mensal da distribuidora.
*/


let SP = { cidade: 'SP', valor: 67863.43, percentual: 0 }
let RJ = { cidade: 'RJ', valor: 36678.66, percentual: 0 }
let MG = { cidade: 'MG', valor: 29229.88, percentual: 0 }
let ES = { cidade: 'ES', valor: 27165.48, percentual: 0 }
let Outros = { cidade: 'Outros', valor: 19849.53, percentual: 0 }


let Total = SP.valor + RJ.valor + MG.valor + ES.valor + Outros.valor

SP.percentual = ((SP.valor/Total)*100).toFixed(2) +'%'
RJ.percentual = ((RJ.valor/Total)*100).toFixed(2) +'%'
MG.percentual = ((MG.valor/Total)*100).toFixed(2) +'%'
ES.percentual = ((ES.valor/Total)*100).toFixed(2) +'%'
Outros.percentual = ((Outros.valor/Total)*100).toFixed(2) +'%'


console.log(SP);
console.log(RJ);
console.log(MG);
console.log(ES);
console.log(Outros);

console.log(Total)