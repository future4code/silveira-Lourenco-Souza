type pokemon = {
  name: string,
  types: string,
  healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) tsc <nome-do-arquivo> no terminal
// c) basta entrar na pasta usando o terminal e logo em seguida usar o comando descrito acima: tsc src/<nome-do-arquivo>.ts,
//    ou para facilitar basta criar um arquivo tsconfig.json com tsc --init
// d) criar um arquivo package.json com npm init --y e dentro dele criar scripts com tsc após instalar o tsconfig.json ou
//    rodar no terminal um tsc com o nome de todos os arquivos separados com espaço: tsc arquivo1.ts arquivo2.ts arquivo3.ts