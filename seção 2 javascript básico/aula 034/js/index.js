function meuEscopo() {
  const formulário = document.querySelector('.formulario');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function capturaEventoDoForm(evento) {
    evento.preventDefault();

    const nome = formulário.querySelector('.nome');
    const sobrenome = formulário.querySelector('.sobrenome');
    const peso = formulário.querySelector('.peso');
    const altura = formulário.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML = `<p>Nome: ${nome.value}</p>`;
    resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
    resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
    resultado.innerHTML += `<p>altura: ${altura.value}</p>`;
  }

  formulário.addEventListener('submit', capturaEventoDoForm);
}

meuEscopo();