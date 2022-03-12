const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}