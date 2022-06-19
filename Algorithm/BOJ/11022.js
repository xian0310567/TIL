const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const T = input.shift();
let temp = [];

// ---

for(let i = 0; i < T; i++) {
  temp = input[i].split(' ').map(a => +a);
  console.log(`Case #${i+1}: ${temp[0]} + ${temp[1]} = ${temp[0] + temp[1]}`);
}