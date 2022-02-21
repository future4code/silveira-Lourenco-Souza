// Exercícios de Interpretação de Código
// 1.a)
// Matheus Nachtergaele
// Virginia Cavendish
// { canal: 'Globo', horario: '14h' }

// 2.
// a)
// { nome: 'Juca', idade: 3, raca: 'SRD' }
// { nome: 'Juba', idade: 3, raca: 'SRD' }
// { nome: 'Jubo', idade: 3, raca: 'SRD' }

// b)
// É usado para dar spread nesse objeto, copiando os atributos de outro objeto para esse.

// 3.
// a)
// false
// undefined

// b)false pois o valor de backender está em false, e undefined porque altura não é um atributo definido.

// ------------------------------------------------------------------------------------------------
// Exercícios de Escrita de Código

// 1.a)

let pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

let meet = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
}

meet(pessoa)

// b)

let pessoaDois = {
    ...pessoa,
    apelidos: ["Amandita", "Mandita", "Mandy"]
}

meet(pessoaDois)

// ------------------------------------------------------------------------------------------------

// 2.a)

let pessoa = {
    nome: "José",
    idade: 45,
    profissao: "Advogado"
}

let pessoaDois = {
    nome: "João",
    idade: 39,
    profissao: "Médico"
}

// b)

const info = (objeto) => {
    let infor = []
    infor.push(objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length)

    return infor
}

console.log(info(pessoa));

// ------------------------------------------------------------------------------------------------
// 3.a)

let carrinho = []

// b)

let fruta = {
    nome: 'Morango',
    disp: true
}

let frutaDois = {
    nome: 'Melancia',
    disp: true
}

let frutaTres = {
    nome: 'Manga',
    disp: true
}

// c)

let comprar = (objeto) => {
    carrinho.push(objeto)
}

comprar(fruta)
comprar(frutaDois)
comprar(frutaTres)

// d)

console.log(carrinho);

// ------------------------------------------------------------------------------------------------
// Desafios

// 1.
let nome = prompt('Qual seu nome?: ')
let idade = Number(prompt('Qual seu idade?: '))
let prof = prompt('Qual sua profissão?: ')

let register = (nome, idade, prof) => {
    const objeto = {
        nome: nome,
        profissao: prof,
        idede: idade
    }

    console.log(objeto);
}

register(nome, idade, prof)

// ------------------------------------------------------------------------------------------------
// 2.

let filmeUm = {
    nome: "EX",
    anoLançamento: 2000
}

let filmeDois = {
    nome: "EX",
    anoLançamento: 2000
}

const comparacaoFilme = (obj1, obj2) => {
    console.log(`O primeiro filme foi lançado antes do segundo?: ${obj1.anoLançamento < obj2.anoLançamento}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo?: ${obj1.anoLançamento === obj2.anoLançamento}`);

}

comparacaoFilme(filmeUm, filmeDois)

// ------------------------------------------------------------------------------------------------
// 3.

let control = (objeto) => {
    objeto.disp = false
}

control(fruta)
control(frutaDois)
control(frutaTres)

console.log(carrinho);