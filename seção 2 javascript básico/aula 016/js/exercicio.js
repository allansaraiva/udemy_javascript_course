const nome = 'Allan Carlos';
const sobrenome = 'Lima Saraiva';
const idade = 21;
const peso = 130;
const altura = 1.9;
let imc; // - peso / (altura * altura) 
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg`);
console.log(`tem ${altura} de altura, seu IMC é ${imc} e nasceu no ano de ${anoNascimento}.`)

