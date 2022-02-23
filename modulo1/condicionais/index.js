// Exercícios de Interpretação de Código

// 1.a) Apenas verifica se o número é par dividindo o número por dois e conferindo se o resto é igual a zero.
// b)Para os números pares.
// c) Para os números ímpares.

// 2.a) O script permite ao usuário verificar o preço da fruta escolhida.
// b) O preço da fruta  Maçã  é  R$  2.25
// c) O preço da fruta  Pêra  é  R$  5

// 3.a) Lendo o valor digitado pelo usuário como tipo String e armazenando esse valor como tipo Número após a conversão.
// b) Se o usuário digitar 10 a mensagem de saída será "Esse número passou no teste". Se for -10 nada aparece, apenas um erro de que o valor da variável mensagem ainda não foi definido.
// c) Sim pois a variável mensagem foi declarada dentro de uma função, logo a mesma só será reconhecida de forma local.

// ---------------------------------------------------------------------------------------------------
// Exercícios de Escrita de Código

// 1.

let idade = Number(prompt('Qual a sua idade?: '))

idade >= 18 ? console.log("Você pode dirigir") : console.log("Você não pode dirigir");

// ---------------------------------------------------------------------------------------------------

// 2.

let input = prompt('Qual turno você estuda?. Tecle para:\nM) matutino - V) vespertino - N) noturno')

let turno = input.toUpperCase()

if (turno === 'M') {
    console.log('Bom Dia!');
} else if (turno === 'V') {
    console.log('Boa Tarde!');
} else if (turno === 'N') {
    console.log('Boa Noite!');
} else {
    console.log("Digite uma letra válida.");
}

// ---------------------------------------------------------------------------------------------------
// 3.

let input = prompt('Qual turno você estuda?. Tecle para:\nM) matutino - V) vespertino - N) noturno')

let turno = input.toUpperCase()

switch (turno) {
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V':
        console.log('Boa Tarde!');
        break;
    case 'N':
        console.log('Boa Noite!');
        break;
    default:
        console.log("Digite uma letra válida.");
        break;
}

// ---------------------------------------------------------------------------------------------------
// 4.

let generoFilme = prompt("Qual o gênero do filme?")
let precoFilme = Number(prompt('Qual o valor dos ingresos?'))

if (generoFilme.toLowerCase() === "fantasia" && precoFilme < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

// ---------------------------------------------------------------------------------------------------
// Desafios
//  1.

let generoFilme = prompt("Qual o gênero do filme?")
let precoFilme = Number(prompt('Qual o valor dos ingresos?'))

if (generoFilme.toLowerCase() === "fantasia" && precoFilme < 15) {
    let snack = prompt("Qual snack que você quer comprar?")

    console.log("Bom filme!");
    console.log(`Aproveite seu/sua ${snack}.`);
} else {
    console.log("Escolha outro filme :(");
}

// ---------------------------------------------------------------------------------------------------
// 2.
//Obs.: Fiz de uma maneira que o usuário pudesse digitar os valores tanto em maiúsculo como minúsculo.


let nomeCompleto = prompt('Digite o seu nome completo: ')
let tipoJogo = prompt('Qual o tipo de jogo:\nIN) Internacional - DO) Doméstico')
let etapaJogo = prompt('Qual a etapa do jogo:\nSF) Semi-final - DT) Decisão de terceiro lugar - FI) Final')
let categoria = Number(prompt('Qual a categoria do jogo:\n1, 2, 3 ou 4.'))
let quantIng = Number(prompt('Qual a quantidade de ingresos?'))


let lugar = (tipoJogo) => {

    switch (tipoJogo.toUpperCase()) {
        case "IN":
            return "Internacional"
            break
        case "DO":
            return "Nacional"
            break
        default:
            return "Inválido"
            break
    }
}

let place = lugar(tipoJogo)

//----------------------------------------------------------------

let etapa = (etapaJogo) => {
    switch (etapaJogo.toUpperCase()) {
        case "SF":
            return "Semi-final"
            break
        case "DT":
            return "Decisão terceiro lugar"
            break
        case "FI":
            return "Final"
            break
        default:
            return "Inválido"
            break
    }
}

let step = etapa(etapaJogo)

//----------------------------------------------------------------


let cat = (categoria) => {
    if (categoria >= 1 && categoria <= 4) {
        return categoria
    } else {
        return "Inválido"
    }
}

let category = cat(categoria)

//----------------------------------------------------------------


let valor = (etapaJogo, categoria) => {
    let preco

    switch (etapaJogo.toUpperCase()) {
        case "SF":
            switch (categoria) {
                case 1:
                    preco = 1320
                    break

                case 2:
                    preco = 880
                    break

                case 3:
                    preco = 550
                    break

                case 4:
                    preco = 220
                    break

                default:
                    preco = "Inválido"
            }
            break

        case "DT":
            switch (categoria) {
                case 1:
                    preco = 660
                    break

                case 2:
                    preco = 440
                    break

                case 3:
                    preco = 330
                    break

                case 4:
                    preco = 170
                    break

                default:
                    preco = "Inválido"
            }
            break

        case "FI":
            switch (categoria) {
                case 1:
                    preco = 1980
                    break

                case 2:
                    preco = 1320
                    break

                case 3:
                    preco = 880
                    break

                case 4:
                    preco = 330
                    break

                default:
                    preco = "Inválido"
            }
            break

        default:
            preco = "Inválido"
            break
    }
    return preco
}

let money = valor(etapaJogo, categoria)


//----------------------------------------------------------------
// Cálculo dos valores:
//----------------------------------------------------------------



let moeda = (money, place) => {
    if (place === "Nacional") {
        return `R$${money},00`

    } else if (place === "Internacional") {
        return `US$${Math.round(money * 4.1)}.00`
    }
}

//----------------------------------------------------------------

let totalValue = (money, place, quantIng) => {
    if (place === "Nacional") {
        return `R$${money * quantIng},00`
    } else if (place === "Internacional") {
        return `US$${Math.round(money * 4.1 * quantIng)}.00`
    }
}

console.log(

    `---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${place}
Etapa do jogo: ${step}
Categoria: ${category}
Quantidade de Ingresos: ${quantIng}
---Valores--- 
Valor do Ingresos: ${moeda(money, place)}
Valor Total: ${totalValue(money, place, quantIng)}
`);
