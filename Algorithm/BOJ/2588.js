const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let A = Number(input[0]);
let B = input[1].toString().split('').map((a) => +a);

for(let i = B.length - 1; i >= 0; i--) {
  console.log(A * B[i]);
}

console.log(A * B.join(''));