const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const temp = input[0].split(' ');

const N = temp[0];
const X = temp[1];
input.shift();
const A = input[0].split(' ').map(a => +a);

// ---

let result = '';

for(let i = 0; i < N; i++) {
  if(A[i] < X) result += A[i] + ' ';
}

console.log(result);