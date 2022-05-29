type Prato = {
  nome: string,
  custo: number,
  valorVenda: number,
  ingredientes: string[]
}

type Venda = {
  nome: string,
  comprador: string
}

const fs: any = require('fs')

const BASE_FOLDER: string = "./src/lastChallenge/produtosDatabase.json"
const listaDeProdutos: Prato[] = JSON.parse(fs.readFileSync(BASE_FOLDER))

const VENDA_FOLDER: string = "./src/lastChallenge/vendasDatabase.json"
const listaDeVendas: Venda[] = JSON.parse(fs.readFileSync(VENDA_FOLDER))

//---------------------------------------------------------------------------------------------

const addProduto = (prato: Prato): void => {
  
  const novaListaDeProdutos = [...listaDeProdutos, prato]
  fs.writeFileSync(BASE_FOLDER, JSON.stringify(novaListaDeProdutos))
}

//---------------------------------------------------------------------------------------------

const findProduto = (nome: string): Prato => {
  
  const busca = listaDeProdutos.filter((produto: Prato) => {
    return produto.nome === nome
  })

  return busca[0]
}

//---------------------------------------------------------------------------------------------

const makeVenda = (nome: string, cliente: string): void => {

  const venda: Venda = {
    nome: nome,
    comprador: cliente
  }

  const novaListaDeVendas: Venda[] = [...listaDeVendas, venda]
  fs.writeFileSync(VENDA_FOLDER, JSON.stringify(novaListaDeVendas))
  
}

//---------------------------------------------------------------------------------------------



const profit = (): string => {
  
  let totalProfit: number = 0

  listaDeVendas.forEach((venda) => {

    const produto: Prato = findProduto(venda.nome)

    totalProfit += (produto.valorVenda - produto.custo)
  })

  return `O valor total de lucro é: R$ ${totalProfit},00`
}

//---------------------------------------------------------------------------------------------

// const adicionando: Prato = {
//   nome: "bolo",
//   custo: 300,
//   valorVenda: 500,
//   ingredientes: ["Farinha", "Leite", "Ovos"]
// }
// addProduto(adicionando)

// console.log(findProduto("macarrão"));

// makeVenda("bolo", "Lourenço")

console.log(profit());

