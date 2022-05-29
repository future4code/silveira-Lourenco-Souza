enum Tipo {
  VER = "verão",
  BAN = "banho",
  INT = "íntimo",
  INV = "inverno"
}

type Produto = {
  nome: string,
  preco: number, 
  classif: Tipo
}

type Desc = {
  desconto: string
}

const calcDesc = (produtos: Produto[]): (Produto & Desc)[] => {

  let sale: number | undefined = undefined

  const applySale = produtos.map((item: Produto) => {
    switch(item.classif){
      case Tipo.VER:
        sale = 5
        break
      case Tipo.BAN:
        sale = 4
        break
      case Tipo.INT:
        sale = 7
        break
      case Tipo.INV:
        sale = 10
        break
      default: 
        sale = 0
        break
    }

      const valorFinal = item.preco * (100 - sale) / 100
      return {...item, desconto: `preço com desconto: R$ ${valorFinal},00`}
  })

  return applySale
}

const meuCarrinho: Produto[] = [
  {
    nome: "toalha",
    preco: 100,
    classif: Tipo.INV
  },
  {
    nome: "camisa",
    preco: 60,
    classif: Tipo.VER
  },
  {
    nome: "calça",
    preco: 140,
    classif: Tipo.VER
  }
]

console.log(calcDesc(meuCarrinho));
