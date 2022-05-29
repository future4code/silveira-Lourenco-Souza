import { writeFileSync, readFileSync } from "fs"

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
const listaDeProdutos: any = JSON.parse(fs.readFileSync(BASE_FOLDER))

console.log(listaDeProdutos.produtos);

const addProduto = (prato: Prato): void => {
  
  const novaListaDeProdutos = {...listaDeProdutos, prato}
  writeFileSync(BASE_FOLDER, JSON.stringify(novaListaDeProdutos))
}

addProduto({nome: "macarrão", custo: 100, valorVenda: 120, ingredientes: ["Pacote de macarrão", "alho", "óleo"]})
