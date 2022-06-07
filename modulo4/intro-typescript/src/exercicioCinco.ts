function checaRenovacaoRG(): boolean {
  const anoAtual: number = +process.argv[2]
  const anoNascimento: number = +process.argv[3]
  const anoEmissao: number = +process.argv[4]

  const idade: number = anoAtual - anoNascimento
  const tempoCarteira: number = anoAtual - anoEmissao

  const cond1: boolean = idade <= 20 && tempoCarteira >= 5
  const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3: boolean = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
}