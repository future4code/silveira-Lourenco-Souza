let minhaString: string = "Qualquer coisa..."
// a) Acontece um erro pois a variável só recebe valores tipo string.

let meuNumero: number | string = 26
//b) Para uma variável receber um valor entre vários tipos basta usar o Union Type

enum Cores {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "azul escuro",
  ROXO = "roxo"
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores
}

const grandFather: Pessoa = {
  nome: "José", 
  idade: 81,
  corFavorita: Cores.VERDE
}
const grandMother: Pessoa = {
  nome: "Maria", 
  idade: 84,
  corFavorita: Cores.VERMELHO
}
const Mother: Pessoa = {
  nome: "Isaura",
  idade: 42,
  corFavorita: Cores.AMARELO
}
const Father: Pessoa = {
  nome: "Antônio",
  idade: 40,
  corFavorita: Cores.AZUL
}