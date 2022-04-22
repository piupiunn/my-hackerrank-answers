{
  https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
}

function plusMinus(arr) {
  let length = arr.length
  let positive = 0
  let negative = 0
  let zero = 0

  arr.forEach((number) => {
    number > 0 ? positive++
      : number < 0 ? negative++
        : zero++
}) 

  const positiveRatio = (positive / length).toFixed(6)
  const negativeRatio = (negative / length).toFixed(6)
  const zeroRatio = (zero / length).toFixed(6)

console.log(positiveRatio)
console.log(negativeRatio)
console.log(zeroRatio)

}



