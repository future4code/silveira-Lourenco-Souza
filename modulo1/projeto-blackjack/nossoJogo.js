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


const start = (comprarCarta) =>{
   let handPlayer = [comprarCarta(), comprarCarta()]
   
   let handCpu = [comprarCarta(), comprarCarta()]
   
   
   let playerPoints = handPlayer[0].valor + handPlayer[1].valor
   
   let cpuPoints = handCpu[0].valor + handCpu[1].valor
   
   
   console.log(`Usuário - cartas: ${handPlayer[0].texto} ${handPlayer[1].texto} - 
   pontuação ${playerPoints}`)
   
   console.log(`Computador - cartas: ${handCpu[0].texto} ${handCpu[1].texto} - 
   pontuação ${cpuPoints}`);
   console.log(" ------------------------");
   
   if(playerPoints > cpuPoints) {
      console.log("O usuário ganhou!")
   } else if (playerPoints < cpuPoints) {
      console.log("O computador ganhou!")
   } else if (playerPoints === cpuPoints) {
      console.log("Empate!");
   }
   
}


console.log("Boas vindas ao jogo de Blackjack!")
console.log(" ------------------------");


if (confirm("Quer iniciar uma nova rodada?")){

   start(comprarCarta)
} else {
   console.log("O jogo acabou");
}