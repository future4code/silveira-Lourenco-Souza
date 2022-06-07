// Exercício 1

// a) como fazemos para acessar os parâmetros passados na linha de comando para o Node ?:
// Resposta: usando o process.argv

// b)
const nome = process.argv[2]
const idade = +process.argv[3]

if (!nome) {
  console.log("\x1b[31m", "Esperava 2 parâmetros não recebi nenhum.");
} else if (isNaN(idade)){
  console.log("\x1b[31m", "Esperava 2 parâmetros só recebi um.");
} else {
  console.log("\x1b[32m", `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}!`);
}


// ---------------------------------------------------------------------------------------------------