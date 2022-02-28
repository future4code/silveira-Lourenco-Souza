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
      text += ` ${hand[c].texto}`
   }
   return text
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Filtra, caso haja dois A's na mão, é feito um redraw
let start = (player) => {
   player = drawCards(player, 2)

   let filtro = (player) => {

      while (player[0].valor && player[1].valor === 11) {
         player = []
         player = drawCards(player, 2)

      }
      return player

   }
   player = filtro(player)
   return player

}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// Fase do jagador
let turn = (player, cpu) => {

   let loop = true
   while (loop === true) {


      if (confirm(`Suas cartas são${getCardText(player)}. A carta revelada pelo computador é ${cpu[0].texto}. Deseja comprar mais uma carta?`)) {
         player = drawCards(player, 1)

         if (getPoints(player) >= 21) {
            loop = false
            return player
         }

      } else {
         loop = false
         return player
      }

   }
}
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// Fase do computador
let turnAi = (cpu, player) => {

   let loop = true
   while (loop === true) {

      if (getPoints(cpu) <= 21 && getPoints(cpu) < getPoints(player)) {
         cpu = drawCards(cpu, 1)
      } else if (getPoints(cpu) === getPoints(player)) {
         loop = false
         return cpu
      } else {
         loop = false
         return cpu
      }

   }
}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Função final
let final = (player, cpu)=> {
   let resultado = ""

   if (getPoints(player) > getPoints(cpu) && getPoints(player) > 21){
      resultado = "O computador ganhou! 🤖🥇"
   } else if (getPoints(player) < getPoints(cpu) && getPoints(cpu) > 21){
      resultado = "O usuário ganhou! 😉🏆"
   } else if (getPoints(player) === getPoints(cpu)){
      resultado = "A partida terminou empatada! 😁🤝🤖"
   } else if (getPoints(player) > getPoints(cpu)) {
      resultado = "O usuário ganhou! 😉🏆"
   } else if (getPoints(player) < getPoints(cpu)) {
      resultado = "O computador ganhou! 🤖🥇"
   }

   alert
   (
`Suas cartas são${getCardText(player)}. 
Sua pontuação é ${getPoints(player)}.
 ------------------------
As cartas do computador são${getCardText(cpu)}. 
A pontuação do computador é ${getPoints(cpu)}
 ------------------------
${resultado}
   `)

}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// Início do jogo. Estrutura principal.
alert("Boas vindas ao jogo de Blackjack! 🃏")



if (confirm("Quer iniciar um novo jogo? 🤔")) {

   let player = []
   player = start(player)

   let cpu = []
   cpu = start(cpu)
   
player = turn(player, cpu)
cpu = turnAi(cpu, player)

   final(player, cpu)

} else {
   alert("O jogo acabou sem nem começar... 😕")
}
// -------------------------------------------------------------------------------

