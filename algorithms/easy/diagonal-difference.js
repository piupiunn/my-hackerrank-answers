function diagonalDifference(arr) {
  const length = arr.length;
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (let i = 0; i < length; i++) {
    sumDiagonal1 += arr[i][i];
    sumDiagonal2 += arr[length - 1 - i][i];
  }
  return Math.abs(sumDiagonal1 - sumDiagonal2);
}
