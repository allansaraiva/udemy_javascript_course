function função() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}
função(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);