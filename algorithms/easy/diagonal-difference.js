{
  https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
}

function diagonalDifference(arr) {


  let length = arr.length
  let sumDiagonal1 = 0
  let sumDiagonal2 = 0

  arr.forEach((value, i) => {  
    sumDiagonal1 += arr[i][i]
    sumDiagonal2 += arr[length - 1 - i][i]                      
})
return Math.abs(sumDiagonal1 - sumDiagonal2)
 

}



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