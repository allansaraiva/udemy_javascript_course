function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números');
  }

  return x + y
}

try {
  console.log(soma('a', 1));
} catch(error) {
  console.log('não expor os erros para o usuário');
}