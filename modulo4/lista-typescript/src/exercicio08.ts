const checaRenovacaoRG = (dataNasc: string, dataId: string): boolean => {
  
  const anoAtual: Date = new Date()
  const anoNasc: Date = new Date(dataNasc) 
  const anoId: Date = new Date(dataId)
  

  const idade: number = ((anoAtual.getTime() - anoNasc.getTime()) / (1000 * 3600 * 24)) / 365
  const tempoCarteira: number = ((anoAtual.getTime() - anoId.getTime()) / (1000 * 3600 * 24)) / 365

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG("11/02/1996", "05/05/2009"));

// const today = new Date()
// console.log(today);

// const born = new Date("06/30/2019")
// console.log(born);

// const diference = today.getTime() - born.getTime()
// console.log(diference);

// const diferenceYear = (diference / (1000 * 3600 * 24)) in days
// console.log(diferenceYear.toFixed());
