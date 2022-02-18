// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a área do triângulo:'))
  const largura = Number(prompt('Digite a largura do triângulo:'))

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = Number(prompt('Qual o ano atual?:'))
const anoNasc = Number(prompt('Em que ano você nasceu?:'))

console.log(anoAtual - anoNasc);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?:')
  const idade = Number(prompt('Qual a sua idade?:'))
  const email = prompt('Digite seu email para contato: ')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cores = []
  cores.push(prompt('Digite sua primeira cor favorita:'))
  cores.push(prompt('Digite sua segunda cor favorita:'))
  cores.push(prompt('Digite sua terceira cor favorita:'))

  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let x = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = x

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual o ano atual?:'))
  const anoNasc = Number(prompt('Em que ano você nasceu?:'))
  const anoCart = Number(prompt('Em que ano você emitiu sua última carteira de identidade?: '))

  const idade = anoAtual - anoNasc
  const tempoId = anoAtual - anoCart

  const renovUm = idade <= 20 && tempoId >= 5
  const renovDois = idade > 20 && idade <= 50 && tempoId >= 10
  const renovTres = idade > 50 && tempoId > 15

  console.log(renovUm || renovDois || renovTres);
}

// EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   const condUm = ano % 400 === 0
//   const condDois = ano % 4 === 0 
//   const condTres = ano % 100 === 0 && ano % 400 === 0

//   return condUm || condDois || condTres
// }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const ano = prompt('Você tem mais de 18 anos?')
  const estudo = prompt('Você possui ensino médio completo?')
  const disp = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  console.log((ano === "sim") && (estudo === "sim") && (disp === "sim"));
}