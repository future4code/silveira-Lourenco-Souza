const findEra = (year: number, age?: string): string => {
  enum Age {
    AC = "AC",
    DC = "DC" 
  }

  if(age === Age.AC){
      if(year > 4000){
        return "Pré-História"
      } else if(year <= 4000 && year >= 0){
        return "Idade Antiga"
      } else {
        return "Erro"
      }
    } else {
      if(year >= 0 && year < 476 ){
        return "Idade Antiga"
      } else if(year >= 476 && year < 1453){
        return "Idade Média"
      } else if(year >= 1453 && year < 1789){
        return "Idade Moderna"
      } else if(year >= 1789){
        return "Idade Conteporânea"
      } else {
        return "Erro"
      }
    }
  }

  console.log(findEra(0));