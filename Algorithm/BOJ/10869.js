const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map((a) => +a);

const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);