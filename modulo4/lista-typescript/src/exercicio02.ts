const findType = (value: any): any => {
  
  return typeof(value)
}

// let input: any = process.argv[2]
// Há um problema em usar esse recurso pois todas as entradas serão tratadas como tipo string

console.log(findType("Colocar valor aqui..."));
