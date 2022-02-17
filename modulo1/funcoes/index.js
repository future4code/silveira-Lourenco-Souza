// Exercícios de Interpretação de Código
// 1.
// a)
// 10
// 50

// b)Não vai aparecer nada pois a função apenas faz o retorno do resultado do cálculo.

// 2.
// a)A função vai receber um texto do usuário, converter tudo para minúsculo e depois
//      vai procurar se há a palavra cenoura e retornar true se houver ou false se não houver

// b)
// i. true
// ii. true
// iii. false

// ---------------------------------------------------------------------------------------------

// Exercícios de Escrita de Código

// 1.Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma
//      mensagem falando algumas informações sobre você, como:

const informar = function() {
    return "Eu sou Lourenço, tenho 26 anos, moro em Palotina e sou estudante."

}

// ---------------------------------------------------------------------------------------------

// b)Agora escreva uma função que receba 4 parâmetros que correspondem às informações de
//    uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string).
//    Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem
//    com o template:

const nomeUser = prompt("Qual o seu nome?:")
const age = Number(prompt("Quantos anos você tem?: "))
const city = prompt("Em que cidade você mora?: ")
const occupation = prompt("Qual sua profissão?: ")

function infoUser(nome, idade, cidade, prof) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${prof}.`
}


console.log(infoUser(nomeUser, age, city, occupation));

// ---------------------------------------------------------------------------------------------

// 2.
// a)Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma
//   das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

const soma = (num1, num2) => num1 + num2

console.log(soma(num1,num2));


// ---------------------------------------------------------------------------------------------

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o
//    primeiro número é maior ou igual ao segundo.

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

const comp = (num1, num2) => num1 >= num2

console.log(comp(num1, num2));

// ---------------------------------------------------------------------------------------------

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

const par = (num1) => num1 % 2 === 0

const num1 = Number(prompt("Digite um número"))
console.log(par(num1));

// ---------------------------------------------------------------------------------------------

// d) Faça uma função que recebe uma mensagem(string) como parâmetro e imprima o tamanho
//  dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const fraseTamMaiu = (string) => {
    console.log(`O tamanho da mensagem é de ${string.length} caracteres.` );
    console.log(`A mensagem é: ${string.toUpperCase()}`);
}

fraseTamMaiu(prompt("Digite uma frase:"))

// ---------------------------------------------------------------------------------------------
// 3.

const soma = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const num1 = Number(prompt('Digite o primeiro número: '))
const num2 = Number(prompt('Digite o segundo número: '))

console.log(`Números inseridos: ${num1} ${num2}`);
console.log(`Soma: ${soma(num1, num2)}`);
console.log(`Diferença: ${num1-num2}`);
console.log(`Multiplicação: ${num1*num2}`);
console.log(`Divisão: ${num1/num2}`);

// ---------------------------------------------------------------------------------------------
// Desafios

// 1.Funções são trechos de códigos como quaisquer outros mas que podemos acessá - los mais de uma
//     vez ao longo do código através de invocações / chamadas.Então, funções podem
//     chamar / invocar outras funções também.Sua tarefa é escrever duas funções

// a)Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

const print = (parametro) => {
    console.log(parametro);
}

// ---------------------------------------------------------------------------------------------

// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma 
// como entrada para imprimi - lo


const func = (parametro1, parametro2) => {
    const soma = parametro1 + parametro2
    print(soma)
}

const x = Number(prompt('Digite o primeiro número: '))
const y = Number(prompt('Digite o segundo número:'))

func(x, y)

// ---------------------------------------------------------------------------------------------

// 2.Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando
//  o valor da hipotenusa.Retorne este valor, invoque a função e imprima o resultado no console. 

const cateto1 = Number(prompt('Digite o valor do primeiro cateto: '))
const cateto2 = Number(prompt('Digite o valor do segundo cateto: '))

const hipotenusa = (cateto1, cateto2) => (cateto1 ** 2) + (cateto2 ** 2)

console.log(hipotenusa(cateto1, cateto2));