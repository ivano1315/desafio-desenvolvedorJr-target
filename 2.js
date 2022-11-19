/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
 e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência 
ou pode ser previamente definido no código;*/



const numeroInformado = 4;

let primeiroNumero = 0;
let segundoNumero = 1;
let numero = 0;

if (numeroInformado === primeiroNumero) {
    console.log('Pertence a Sequencia');
}


for (let i = 0; i < 500; i++) {
    numero = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = numero;

    if(numero === numeroInformado){
        console.log('Pertence a Sequência')
         break ; 
    }
    
}
 



