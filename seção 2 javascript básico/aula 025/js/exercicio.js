const nomeCompleto = prompt('Digite seu nome completo:');

document.body.innerHTML = `Seu nome completo é: ${nomeCompleto} <br>`;
document.body.innerHTML += `Seu nome tem ${nomeCompleto.length} letras. <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeCompleto.charAt(1)} <br>`;
document.body.innerHTML += `O primeiro índice da letra A no seu nome é o índice: ${nomeCompleto.indexOf('a')} <br>`;
document.body.innerHTML += `O último índice da letra A no seu nome é o índice: ${nomeCompleto.lastIndexOf('a')} <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeCompleto.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeCompleto.split(' ')}`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeCompleto.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeCompleto.toLowerCase()}`;