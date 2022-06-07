const calcular = (num1: number, num2: number): string => {

  return(
  `Assim ficam os calculos:
  A soma de ${num1} com ${num2} é igual a: ${num1 + num2}
  A subtração de ${num1} com ${num2} é igual a: ${num1 - num2}
  A multiplicação de ${num1} com ${num2} é igual a: ${num1 * num2}
  A divisão de ${num1} com ${num2} é igual a: ${num1 / num2}
  ${num1 < num2 ? num2 : num1} é ${num1 === num2 ? "igual a" : "maior que"} ${num1 < num2 ? num1 : num2}
  `)
}
console.log(calcular(6, 8));
