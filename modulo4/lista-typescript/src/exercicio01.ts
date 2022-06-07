const personInfo = (name: string, date: string): string => {

  let day: number | undefined
  let month: number | string | undefined
  let year: number | undefined
  
  if (date.charAt(2) && date.charAt(5) === "/"){
    day = +date.slice(0, date.indexOf("/"))
    month = +date.slice(date.indexOf("/") + 1, date.lastIndexOf('/'))
    year = +date.slice(date.lastIndexOf('/') + 1, date.length)
  } else {
    return "Erro no tipo de Data. Insira a Data nesse padrão: DD/MM/AAAA"
  }

  if(day > 31 || month > 12 || day <= 0 || month <= 0){
    return day > 31 || day <= 0 ? "Valor de dia inválido." : "Valor de mês inválido" 
  }

  const converterMonth = (month: number): string => {
    const monthList: string[] = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ]

    return monthList[month - 1]
  }

  return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${converterMonth(month)} do ano de ${year}`
}

let nome: string = process.argv[2]
let data: string = process.argv[3]

console.log(personInfo(nome, data));