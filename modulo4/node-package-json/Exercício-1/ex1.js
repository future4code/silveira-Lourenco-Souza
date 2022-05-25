// Exercício 1

// a) como fazemos para acessar os parâmetros passados na linha de comando para o Node ?:
// Resposta: usando o process.argv

// b)
const nome = process.argv[2]
const idade = +process.argv[3]

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);

// ---------------------------------------------------------------------------------------------------