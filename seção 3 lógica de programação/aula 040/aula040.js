/*
  Entre 0 - 11 --> Bom dia.
  Entre 12 - 17 --> Boa tarde.
  Entre 18 - 23 --> Boa noite.
*/

const hora = 18;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}
