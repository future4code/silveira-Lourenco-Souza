enum Tipo {
  VER = 5,
  BAN = 4,
  INT = 7,
  INV = 10
}

type Produto = {
  nome: string,
  preco: number, 
  classif: Tipo
}

type Desc = {
  desconto: string
}

const calcDesc = (produto: Produto): Produto & Desc => {
  const valorFinal = produto.preco * (100 - produto.classif) / 100

  return {...produto, desconto: `preço com desconto: R$ ${valorFinal},00`}
}

const meuPedido: Produto = {
  nome: "toalha",
  preco: 100,
  classif: Tipo.INV
}

console.log(calcDesc(meuPedido));
