function getDaySemanaTexto(diaDaSemana) {
  let diaDaSemanaTexto;

  switch (diaDaSemana) {
    case 0:
      diaDaSemanaTexto = 'Domingo';
      return diaDaSemanaTexto;
    case 1:
      diaDaSemanaTexto = 'Segunda-Feira';
      return diaDaSemanaTexto;
    case 2:
      diaDaSemanaTexto = 'Terça-Feira';
      return diaDaSemanaTexto;
    case 3:
      diaDaSemanaTexto = 'Quarta-Feira';
      return diaDaSemanaTexto;
    case 4:
      diaDaSemanaTexto = 'Quinta-Feira';
      return diaDaSemanaTexto;
    case 5:
      diaDaSemanaTexto = 'Sexta-Feira';
      return diaDaSemanaTexto;
    case 6:
      diaDaSemanaTexto = 'Sábado';
      return diaDaSemanaTexto;
    default:
      diaDaSemanaTexto = 'Dia da semana não existente.';
  }
}

const data = new Date('2022-03-01 17:53:00');
const diaDaSemana = data.getDay();
const diaDaSemanaTexto = getDaySemanaTexto(diaDaSemana);

console.log(diaDaSemanaTexto);
