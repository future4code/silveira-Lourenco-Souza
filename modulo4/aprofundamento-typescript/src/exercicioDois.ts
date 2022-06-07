// a) --> O parâmetro numeros que recebe um array de números.
//    <-- Um objeto chamado estatisticas com valores de maior, menor e media do array de números 

const obterEstatisticas = (numeros: number[]): Estatisticas => {

  const numerosOrdenados: number[] = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: Estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

// b) numerosOrdenados: array de números
//    soma: número
//    num: index do for
//    estatisticas: objeto (maior, menor e media: números)

type Estatisticas = {
  maior: number,
  menor: number,
  media: number
}

// c)

type amostraDeDados = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => Estatisticas
}
