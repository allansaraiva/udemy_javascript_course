let varA = 'A'; // - B
let varB = 'B'; // - C
let varC = 'C'; // - A
let varDeSobra;

const varTemporária = varA;

varA = varB;
varB = varC;
varC = varTemporária;

console.log(varA, varB, varC);
