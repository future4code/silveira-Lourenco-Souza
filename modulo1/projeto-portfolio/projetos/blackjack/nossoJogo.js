/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// -------------------------------------------------------------------------------
// Função que retorna as cartas como um objeto.
function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]

   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]

   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]

   let valor

   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
   }

   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
      texto: numero + naipe,
      valor: valor
   }

   return carta
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Função que adiciona mais cartas para a mão do jogador
let drawCards = (hand, numero) => {
   for (let c = 0; c < numero; c++) {
      hand = [...hand, comprarCarta()]

   }
   return hand
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Função que soma os valores das cartas na mão do jogador
let getPoints = (hand) => {
   let soma = 0
   for (let c in hand) {
      soma += hand[c].valor
   }
   return soma
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Função que imprime como um texto as cartas que o jogador tem em sua mão
let getCardText = (hand) => {
   let text = ""
   for (let c in hand) {
      text += `${hand[c].texto} `
   }
   return text
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Função que roda o jogo
const start = (player, cpu) => {

   player = drawCards(player, 2)
   cpu = drawCards(cpu, 2)




   console.log(`Usuário - cartas: ${getCardText(player)}- 
   pontuação ${getPoints(player)}`)

   console.log(`Computador - cartas: ${getCardText(cpu)}- 
   pontuação ${getPoints(cpu)}`);

   console.log(" ------------------------");

   if (getPoints(player) > getPoints(cpu)) {
      console.log("O usuário ganhou!")
   } else if (getPoints(player) < getPoints(cpu)) {
      console.log("O computador ganhou!")
   } else if (getPoints(player) === getPoints(cpu)) {
      console.log("Empate!");
   }

}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Início do jogo
console.log("Boas vindas ao jogo de Blackjack!")
console.log(" ------------------------");


if (confirm("Quer iniciar uma nova rodada?")) {

   let player = []
   let cpu = []
   start(player, cpu)
} else {
   console.log("O jogo acabou");
}
// -------------------------------------------------------------------------------
