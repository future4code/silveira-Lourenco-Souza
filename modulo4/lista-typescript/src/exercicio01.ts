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
    switch(month){
      case 1:
        return "janeiro"
      case 2:
        return "fevereiro"
      case 3:
        return "março"
      case 4:
        return "abril"
      case 5:
        return "maio"
      case 6:
        return "junho"
      case 7:
        return "julho"
      case 8:
        return "agosto"
      case 9:
        return "setembro"
      case 10:
        return "outubro"
      case 11:
        return "novembro"
      case 12:
        return "dezembro"
      default:
        return "Erro"
    }
  }

  return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${converterMonth(month)} do ano de ${year}`
}

console.log(personInfo("Lourenço", "01/02/1996"));

// lastIndexOf
// indexOf
//slice