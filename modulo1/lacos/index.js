// Exercícios  de Interpretação de Código
// 1.Ele está usando a variável "valor" para armazenar o valor de cada variável "i" dentro do loop. O valor do de saída do console é 10

// 2.a)
// 19
// 21
// 23
// 25
// 27
// 30

// b)Para acessar o índice da lista usando a sua posição numérica o for...in... não é o ideal pois a variável de contagem "numero" vai valer por cada índice da lista apenas uma vez.

// 3.
// *
// **
// ***
// ****

// ---------------------------------------------------------------------------------------------------
// Exercícios de Escrita de Código

// 1.
let quantPet = Number(prompt('Quantos pets você tem?'))
let nomePet = []

if (quantPet === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    let c = 0
    while (c < quantPet) {
        let nome = prompt('Digite o nome de cada pet:')
        nomePet.push(nome)
        c++
    }
    console.log(nomePet);
}

// ---------------------------------------------------------------------------------------------------

// 2.a)

let arrayOrigial = [1, 2, 3, 4, 5]

for (let c in arrayOrigial) {
    console.log(arrayOrigial[c]);
}

// b)

let arrayOrigial = [1, 2, 3, 4, 5]

for (let c in arrayOrigial) {
    arrayOrigial[c] = (c / 10)
    console.log(arrayOrigial[c]);
}

// c)

let arrayOrigial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayOrigialPar = []

for (let c in arrayOrigial) {
    if (arrayOrigial[c] % 2 === 0) {
        arrayOrigialPar.push(arrayOrigial[c])
    }

}

// // console.log(arrayOrigialPar);

// d)

let arrayOrigial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayOrigialDescric = []

for (let c in arrayOrigial) {
    arrayOrigialDescric.push(`O elemento do índex ${c} é: ${arrayOrigial[c]}`)

}

console.log(arrayOrigialDescric);

// e)

