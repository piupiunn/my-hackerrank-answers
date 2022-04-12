function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  let length = arr.length;

  arr.forEach((number) => {
    number > 0 ? pos++ : number < 0 ? neg++ : zero++;
  });

  const p = (pos / length).toFixed(6);
  const n = (neg / length).toFixed(6);
  const z = (zero / length).toFixed(6);

  console.log(p);
  console.log(n);
  console.log(z);
}
