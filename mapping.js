var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(z => Math.sqrt(((z.x*z.x) + (z.y*z.y))));
/* Your code here */


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
console.log(result);

