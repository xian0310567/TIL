const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(a => +a);

let answer = new Array(10).fill(0);
const max = String(input[0] * input[1] * input[2]).split('').map(a => +a);

// console.log(max);
for(let i = 0; i < max.length; i++) {
  answer[max[i]] += 1;
}

answer.forEach(element => console.log(element));