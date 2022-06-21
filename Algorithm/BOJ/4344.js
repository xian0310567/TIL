const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const C = input.shift();


let temp = [];
let head = '';
let sum = 0;
let count = [];
for(let i = 0; i < C; i++) {
  temp = input[i].split(' ').map(a => +a);
  head = temp.shift();
  sum = temp.reduce((a, b) => a + b) / temp.length;

  count = temp.filter(a => a > sum);
  console.log(`${(count.length / temp.length * 100).toFixed(3)}%`);
}