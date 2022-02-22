// Exercícios de Interpretação de Código

// 1.a) Apenas verifica se o número é par dividindo o número por dois e conferindo se o resto é igual a zero.
// b)Para os números pares.
// c) Para os números ímpares.

// 2.a) O script permite ao usuário verificar o preço da fruta escolhida.
// b) O preço da fruta  Maçã  é  R$  2.25
// c) O preço da fruta  Pêra  é  R$  5

// 3.a) Lendo o valor digitado pelo usuário como tipo String e armazenando esse valor como tipo Número após a conversão.
// b) Se o usuário digitar 10 a mensagem de saída será "Esse número passou no teste". Se for -10 nada aparece, apenas um erro de que o valor da variável mensagem ainda não foi definido.
// c) Sim pois a variável mensagem foi declarada dentro de uma função, logo a mesma só será reconhecida de forma local.

// ---------------------------------------------------------------------------------------------------
// Exercícios de Escrita de Código

// 1.

let idade = Number(prompt('Qual a sua idade?: '))

idade >= 18 ? console.log("Você pode dirigir") : console.log("Você não pode dirigir");

// ---------------------------------------------------------------------------------------------------

// 2.

let input = prompt('Qual turno você estuda?. Tecle para:\nM) matutino - V) vespertino - N) noturno')

let turno = input.toUpperCase()

if (turno === 'M') {
    console.log('Bom Dia!');
} else if (turno === 'V') {
    console.log('Boa Tarde!');
} else if (turno === 'N') {
    console.log('Boa Noite!');
} else {
    console.log("Digite uma letra válida.");
}

// ---------------------------------------------------------------------------------------------------
// 3.

let input = prompt('Qual turno você estuda?. Tecle para:\nM) matutino - V) vespertino - N) noturno')

let turno = input.toUpperCase()

switch (turno) {
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V':
        console.log('Boa Tarde!');
        break;
    case 'N':
        console.log('Boa Noite!');
        break;
    default:
        console.log("Digite uma letra válida.");
        break;
}

// ---------------------------------------------------------------------------------------------------
// 4.

let generoFilme = prompt("Qual o gênero do filme?")
let precoFilme = Number(prompt('Qual o valor dos ingresos?'))

if (generoFilme.toLowerCase() === "fantasia" && precoFilme < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}