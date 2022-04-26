{
  https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
}

function diagonalDifference(arr) {
length = arr.length 
sumDiagonal1 = 0
sumDiagonal2 = 0

  arr.forEach((value, i) => {
    sumDiagonal1 += [i][i]
    sumDiagonal2 += [length - 1 - i][i]
  })
  return Math.abs(sumDiagonal1 - sumDiagonal2)
}




const matrix = [
                (i,i)
                (0,0)(1,1)(2,2)
  (1, 2, 3)
, (4, 5, 6) 
, (7, 8, 9)     (arr.lenght - 1 -i, i)
                (0,2)(1,1)(2,0)      
]    











const length = arr.length;
let sumDiagonal1 = 0
let sumDiagonal2 = 0

arr.forEach((value, i) => {
  sumDiagonal1 += arr[i][i]
  sumDiagonal2 += arr[length - 1 - i][i]
})
return Math.abs(sumDiagonal1 - sumDiagonal2)





const length = arr.length;
let sumDiagonal1 = 0;
let sumDiagonal2 = 0;

for (let i = 0; i < length; i++) {
  sumDiagonal1 += arr[i][i];
  sumDiagonal2 += arr[length - 1 - i][i];
}
return Math.abs(sumDiagonal1 - sumDiagonal2);