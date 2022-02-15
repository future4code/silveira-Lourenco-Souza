// Exercícios de Interpretação
// 1. 
// a.false
// b.false
// c.true
// d.boolean

// 2. Os valores numéricos que estão sendo passados para as variáveis estão sendo registrados pelo prompt como strings.
// A saída está sendo com a concatenação de duas strings.

// 3. Basta colocar a função prompt dentro da função Number()

// --------------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de códigos

let idadeVc = Number(prompt('Qual a sua idade?'));

let idadeAmig = Number(prompt('Qual a idade do seu melhor amigo ou da sua melhor amiga?'))

console.log("Sua idade:", idadeVc);

console.log("A idade do seu melhor amigo ou da sua melhor amiga:", idadeAmig);

console.log("Sua idade é maior do que a idade do(a) seu(ua) melhor amigo(a)?", idadeVc > idadeAmig);

console.log("A diferença de idade entre vocês dois é:", Math.abs(idadeVc -idadeAmig)); // Pesquisei na internet uma maneira de obter saída do
//                                                                                         // número sempre positiva Math.abs()
// // --------------------------------------------------------------------------------------------------------------------------------

let num = Number(prompt("Insira um número Par: "))

console.log(num % 2);

// // O resto da divisão de qualquer número par por dois será sempre 0
// // O resto da divisão de qualquer número ímpar por dois será sempre 1

// // --------------------------------------------------------------------------------------------------------------------------------

let idade = Number(prompt("Qual sua idade?: "))

console.log("Sua idade em meses é:", idade*12);
console.log("Sua idade em dias é:", idade*365);
console.log("Sua idade em horas é:", idade*8760);

// // --------------------------------------------------------------------------------------------------------------------------------

let x = Number(prompt("Digite o valor do primeiro número: "))

let y = Number(prompt("Digite o valor do segundo número: "))

console.log('O primeiro número é:', x);
console.log('O segundo número é:', y);

console.log('O primeiro numero é maior que o segundo?', x>y);
console.log('O primeiro numero é igual ao segundo?', x === y);
console.log('O primeiro numero é divisível pelo segundo?', x%y === 0);
console.log('O segundo numero é divisível pelo primeiro?', y%x === 0);

// --------------------------------------------------------------------------------------------------------------------------------

// Desafios

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let f = 77
// Graus Fahrenheit(°F) para Kelvin(K)
let fahrenheitKelvin = ((f - 32) * (5 / 9) + 273.15)
console.log("O valor de 77°F em Kelvin é:", fahrenheitKelvin);

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

let c = 80
// Graus Celsius(°C) para Graus Fahrenheit(°C)
let celsiusFahrenheit = (c) * (9 / 5) + 32
console.log("O valor de 80°C em Fahrenheit é:", celsiusFahrenheit);

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
c = 30
celsiusFahrenheit = (c) * (9 / 5) + 32
console.log("O valor de 30°C em Fahrenheit é:", celsiusFahrenheit);
celsiusKelvin = c + 273, 15
console.log("O valor de 30°C em Kelvin é:", celsiusKelvin);

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
c = Number(prompt("Digite o valor para Celsius: "))
celsiusFahrenheit = (c) * (9 / 5) + 32
console.log("O valor de "+ c+"°C em Fahrenheit é:", celsiusFahrenheit);
celsiusKelvin = c + 273, 15
console.log("O valor de " + c+"°C em Kelvin é:", celsiusKelvin);

// --------------------------------------------------------------------------------------------------------------------------------

