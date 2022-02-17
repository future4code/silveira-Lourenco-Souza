// Exercícios de Interpretação de Código

// 1)
// a.undefined
// b.null
// c.  11
// d.  3
// e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f.  9


// 2)
// SUBI NUM ÔNIBUS EM MIRROCOS

// ---------------------------------------------------------------------------------------------
// Exercícios de Escrita de Código
// 1)

const emailDoUsuario = prompt('Qual o seu email?')
const nomeDoUsuario = prompt('Qual o seu nome?')

console.log(`O e - mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem - vinda(o), ${nomeDoUsuario}!`);

// ---------------------------------------------------------------------------------------------

// 2)

let comida = ['Pizza', 'Peixe', 'Churrasco', 'Camarão', 'Batata-Frita']
console.log(comida);

console.log('Essas são as minhas comidas preferidas: ');
console.log(comida[0]);
console.log(comida[1]);
console.log(comida[2]);
console.log(comida[3]);
console.log(comida[4]);

comida[1] = prompt('Qual sua comida favorita?')
console.log(comida);

// ---------------------------------------------------------------------------------------------

// 3)

let listaDeTarefas = []
let c = 0

listaDeTarefas[c++] = prompt('Qual a primeira tarefa de hoje?')
listaDeTarefas[c++] = prompt('Qual a segunda tarefa de hoje?')
listaDeTarefas[c++] = prompt('Qual a terçeira tarefa de hoje?')



console.log(listaDeTarefas)

const indice = prompt(`Digite o índice de uma tarefa que você já realizou: \n0- ${listaDeTarefas[0]} 1- ${listaDeTarefas[1]} 2-${listaDeTarefas[2]}`)

listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)

// ---------------------------------------------------------------------------------------------
// Desafio
// 1)

let frase = prompt('Digite uma frase')
let palavras = frase.split(' ')
 console.log(palavras);

// ---------------------------------------------------------------------------------------------

// 2)

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf('Abacaxi'), frutas.length)

