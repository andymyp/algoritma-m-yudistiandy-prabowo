function diagonalDifference(matrix) {
  let n = matrix.length;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < n; i++) {
    diagonal1 += matrix[i][i];
  }

  console.log(`diagonal pertama: ${diagonal1}`);

  for (let i = 0; i < n; i++) {
    diagonal2 += matrix[i][n - 1 - i];
  }

  console.log(`diagonal kedua: ${diagonal2}`);

  let difference = Math.abs(diagonal1 - diagonal2);

  return difference;
}

// Contoh penggunaan
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];

const result = diagonalDifference(matrix);
console.log(`hasil: ${result}`);
