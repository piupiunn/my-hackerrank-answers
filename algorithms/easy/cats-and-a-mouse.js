 {
  https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
}

position x for cat A
position y for cat B
position z for mouse C,
  

 function catAndMouse(x, y, z) {
   return Math.abs(x - z) > (y - z) ? "Cat B"
     : Math.abs(y - z) > (x - z) ? "Cat A"
       : "Mouse C"
   
}


