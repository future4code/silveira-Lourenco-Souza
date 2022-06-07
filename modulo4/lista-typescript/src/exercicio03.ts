enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type film = {
  name: string,
  releaseYear: number,
  category: GENERO,
  score?: number
}

const formatFilm = (name: string, year: number, categ: GENERO, score?: number): film => {

  const output: film = { name: name, releaseYear: year, category: categ}

  return score ? {...output, score} : output
}

console.log(formatFilm("Duna", 2021, GENERO.ACAO));
