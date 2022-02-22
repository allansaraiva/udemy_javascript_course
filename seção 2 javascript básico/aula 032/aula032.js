const pessoa1 = {
  nome: 'Allan',
  sobrenome: 'Saraiva',
  idade: 25,

  fala() {
    console.log(`Minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()