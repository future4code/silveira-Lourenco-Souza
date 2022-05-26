const reverse = (texto: string): string => {
  let newString: string = ""

  for(let i: number = texto.length -1; i>=0; i--){
    newString += texto[i]
  }
  return newString
}

console.log(reverse("Bananinha"));
