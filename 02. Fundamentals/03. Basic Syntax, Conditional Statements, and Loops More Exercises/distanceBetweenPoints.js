function distanceBetweenPoints (x1, y1, x2, y2) {
  
  let a = Math.abs((x1-x2));
  let b = Math.abs((y1-y2));
  let c = 0;

  c = Math.sqrt((a*a) + (b*b));
  console.log(c);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);