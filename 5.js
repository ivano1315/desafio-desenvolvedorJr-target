/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

let texto = 'TARGET';
let reverse = '';
let qtdDeCaracteres = texto.length - 1;

for (let i = 0; i < texto.length; i++) {
    reverse = reverse + texto[qtdDeCaracteres];
    qtdDeCaracteres = qtdDeCaracteres - 1;
}


console.log(reverse);