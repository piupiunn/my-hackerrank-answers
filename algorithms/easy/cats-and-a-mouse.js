 {
  https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
}

https: function catAndMouse(x, y, z) {
  return Math.abs(x - z) > Math.abs(y - z)
    ? "Cat B"
    : Math.abs(x - z) < Math.abs(y - z)
    ? "Cat A"
    : "Mouse C";
}
