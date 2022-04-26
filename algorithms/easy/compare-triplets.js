{
  https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
}

function compareTriplets(a, b) {
  let alice = 0
  let bob = 0

  a.forEach((value, i) => {
    a[i] > b[i] ? alice++
      : b[i] > a[i] ? bob++
        : ""
  })

  return [alice, bob]

}
























let alice = 0
let bob = 0

a.forEach((value, i) => {
    a[i] > b[i]  ? alice++
  : a[i] < b[i]  ? bob++
  : ""
}
)
return [alice, bob]






let alice = 0;
let bob = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) alice++;
  if (a[i] < b[i]) bob++;
}
return [alice, bob];