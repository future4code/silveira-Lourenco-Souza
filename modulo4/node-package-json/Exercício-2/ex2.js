// Exercício 2

const operacao = process.argv[2]
const arg1 = +process.argv[3]
const arg2 = +process.argv[4]

switch(operacao){
  case "add":
    console.log(`Resposta: ${arg1 + arg2}`);
    break
  case "sub":
    console.log(`Resposta: ${arg1 - arg2}`);
    break
  case "mult":
    console.log(`Resposta: ${arg1 * arg2}`);
    break
  case "div":
    console.log(`Resposta: ${arg1 / arg2}`);
    break
  default: 
    console.log(`Digite uma operação válida: 
    add => adição
    sub => subtracão
    mult => multiplicação
    div => divisão`);
}