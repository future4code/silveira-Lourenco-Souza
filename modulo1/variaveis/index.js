// Exercícios de Interpretação:
// qustão 1: será impresso:
// 10
// 10 5

// qustão 2: será impresso:
// 10 10 10

// questão 3: sugestões:
// variável p: let horaDia = prompt("Quantas horas você trabalha por dia?");
// variável t: let pagDia = prompt("Quanto você recebe por dia?")

let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?')

console.log(typeof(nome), typeof(idade));
// O tipo undefined foi imprimido pois ainda não declarei nenhum valor
//  para as variáveis nome e idade.

// Depois de receber os valores pelo usuário, as duas variáveis passam a ter o tipo 
//  String

console.log("Olá", nome+ "! Você tem", idade, "anos.");


let roupaCor = 'Não'
let calor = 'Sim'
let exercise = 'Sim'

console.log('Você está usando uma roupa azul hoje? -', roupaCor);
console.log('Está fazendo calor aí onde você mora? -', calor);
console.log('Você já fez algum exercício físico hoje? -', exercise);

// --------------------------------------------------------------------------------------------------------------------

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// ----------------------------------------------------------------------------------------------------------------------
// Desafio

let x = Number(prompt('Digite o primeiro número:'))
let y = Number(prompt('Digite o segundo número:'))

console.log('1. O primeiro número somado ao segundo número resulta em: ', x+y);
console.log('2. O primeiro número multiplicado pelo segundo número resulta em: ', x*y);