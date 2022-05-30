const getFatorial = (word: string): number => {
  
  // FUNÇÃO PARA VALIDAR SE A PALAVRA TEM ALGUMA LETRA REPETIDA
  const validation = (word: string): boolean => {
    const input: string[] = word.split("")
    
    const output: boolean = input.some((v, i, a) => {
      return a.lastIndexOf(v) != i
    })

    return output
  }

  if(!validation(word)){

      // FUNÇÃO PARA CALCULAR O FATORIAL
      const factorial = (num: number): number => {
        if(num === 0 || num === 1){
          return 1
        } else {
          return num * factorial(num - 1)
        }
      }

    return factorial(word.length)
  } else {
    return 0
  }
}

console.log(getFatorial("mesa"));

// const teste = "pus".split("")
// console.log(teste);

// const ver= teste.some((v, i, a) => {
//   return a.lastIndexOf(v) != i
// })
// console.log(ver);

// v ... current value of the iteration
// i ... current index of the iteration
// a ... array being iterated