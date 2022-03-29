function conta(operador, acumulador, ...números) {
  for(let número of números) {
    if(operador === '+') acumulador += número;
    if(operador === '-') acumulador -= número;
    if(operador === '/') acumulador /= número;
    if(operador === '*') acumulador *= número;
  }

  console.log(acumulador);
}
conta('/', 0, 10, 20, 30, 40, 50);