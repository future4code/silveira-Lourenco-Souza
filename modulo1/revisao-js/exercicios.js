// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((x, y) => x - y)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter(value => value % 2 == 0)
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter(value => value % 2 == 0)
    return pares.map(value => value ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1 - num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let counter = []
    let c = 0

    while (n > counter.length) {
        if (c % 2 === 0) {
            counter.push(c)
        }
        c++
    }
    return counter
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){    
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    if (array.length > 2) {

        let max = (array) => {

            array.splice(array.indexOf(Math.max(...array)), 1)

            let newA = array

            return Math.max(...newA)
        }

        let min = (array) => {

            array.splice(array.indexOf(Math.min(...array)), 1)

            let newA = array

            return Math.min(...newA)
        }

        let result = []

        result.push(max(array))
        result.push(min(array))

        return result
    } else {
        return array.sort((x, y) => x - y)
    }


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}