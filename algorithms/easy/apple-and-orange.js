{https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let allApples = 0
    let allOranges = 0
     
    apples.forEach((value, i) => {
      apples[i] + a >= s && apples[i] + a <= t ? allApples++
       : ""
    })
     
    oranges.forEach((value, i) => {
      oranges[i] + b >= s && oranges[i] + b <= t ? allOranges++
       : ""
    }) 
      
     console.log(allApples)
     console.log(allOranges)
 }