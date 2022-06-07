// Exercício 2

const operacao = process.argv[2]
const arg1 = +process.argv[3]
const arg2 = +process.argv[4]
if(!operacao){
  console.log("\x1b[33m", `Digite uma operação válida: 
      add => adição
      sub => subtracão
      mult => multiplicação
      div => divisão`);
} else if (isNaN(arg1)){
  console.log("\x1b[31m", "Esperava 2 parâmetros não recebi nenhum.");
} else if (isNaN(arg2)){
  console.log("\x1b[31m", "Esperava 2 parâmetros só recebi um.");
} else {
    switch (operacao) {
      case "add":
        console.log("\x1b[34m", `Resposta: ${arg1 + arg2}`);
        break
      case "sub":
        console.log("\x1b[34m", `Resposta: ${arg1 - arg2}`);
        break
      case "mult":
        console.log("\x1b[34m", `Resposta: ${arg1 * arg2}`);
        break
      case "div":
        console.log("\x1b[34m", `Resposta: ${arg1 / arg2}`);
        break
      default:
        console.log("\x1b[33m", `Digite uma operação válida: 
      add => adição
      sub => subtracão
      mult => multiplicação
      div => divisão`);
    }
}

