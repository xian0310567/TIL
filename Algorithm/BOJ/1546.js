const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let arr = input[1].split(' ').map(a => +a);
const max = Math.max(...arr);

let base = arr.map(element => element/max*100);
let sum = 0;

for(let i = 0; i < input[0]; i++) {
  sum += base[i]; 
}

console.log((sum / arr.length).toFixed(2));