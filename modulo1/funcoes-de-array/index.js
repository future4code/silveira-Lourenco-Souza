// Exercícios de Interpretação de Código

// 1. Algo bem confuso, mas semelhante a um loop, pois é imprimido os objetos várias vezes.

//                                        |
//                                        V

// { nome: 'Amanda Rangel', apelido: 'Mandi' }
// 0
// [
//     { nome: 'Amanda Rangel', apelido: 'Mandi' },
//     { nome: 'Laís Petra', apelido: 'Laura' },
//     { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]

// { nome: 'Laís Petra', apelido: 'Laura' }
// 1
// [
//     { nome: 'Amanda Rangel', apelido: 'Mandi' },
//     { nome: 'Laís Petra', apelido: 'Laura' },
//     { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]

// { nome: 'Letícia Chijo', apelido: 'Chijo' }
// 2
// [
//     { nome: 'Amanda Rangel', apelido: 'Mandi' },
//     { nome: 'Laís Petra', apelido: 'Laura' },
//     { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]


// ------------------------------------------------------------------------------------

// 2. Um novo array com os nomes de cada objeto dentro do array "usuarios"

// ------------------------------------------------------------------------------------

// 3. Um novo array com todos os objetos dentro do array "usuarios", exceto o objeto com o apelido "Chijo"

// ------------------------------------------------------------------------------------
// Exercícios de Escrita de Código

// 1.a)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const nomeDosDog = pets.map((item) => item.nome)

console.log(nomeDosDog);

// ------------------------------------------------------------------------------------
// b)
const apenasSals = pets.filter((item) => {
    if (item.raca === "Salsicha") {
        return true
    }
})

console.log(apenasSals);

// ------------------------------------------------------------------------------------
// c)
const somentePoodle = pets.filter((item) => {
    if (item.raca === "Poodle") {
        return true;
    }
})

const promo = somentePoodle.map((item) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)

console.log(promo)

// ------------------------------------------------------------------------------------

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)
const nomeItem = produtos.map((item) => item.nome)

console.log(nomeItem);

// b)
const descontos = produtos.map((item) => {
    const obj = { nome: item.nome, preco: Number.parseFloat(item.preco * 0.95).toFixed(2) }
    return obj
})

console.log(descontos);

// c)

let bebidas = produtos.filter((item) => item.categoria === "Bebidas")

console.log(bebidas);


