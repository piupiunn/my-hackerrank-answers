function miniMaxSum(arr) {
  const sum = arr.reduce((a, b) => a + b);
  let min = sum - Math.max(...arr);
  let max = sum - Math.min(...arr);

  console.log(min, max);
}
