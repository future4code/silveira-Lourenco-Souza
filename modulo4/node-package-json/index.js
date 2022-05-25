// Exercício 1
// a) como fazemos para acessar os parâmetros passados na linha de comando para o Node ?:
// Resposta: usando o process.argv

// b)
// const nome = process.argv[2]
// const idade = +process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);

// ---------------------------------------------------------------------------------------------------

// Exercício 2

// const operacao = process.argv[2]
// const arg1 = +process.argv[3]
// const arg2 = +process.argv[4]

// switch(operacao){
//   case "add":
//     console.log(`Resposta: ${arg1 + arg2}`);
//     break
//   case "sub":
//     console.log(`Resposta: ${arg1 - arg2}`);
//     break
//   case "mult":
//     console.log(`Resposta: ${arg1 * arg2}`);
//     break
//   case "div":
//     console.log(`Resposta: ${arg1 / arg2}`);
//     break
// }
