const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const N = input.shift();
let temp = [];

for(let i = 0; i < N; i++) {
  temp = input[i].split(' ').map((a) => +a);
  console.log(temp[0] + temp[1]);
}