const input = require('fs').readFileSync('dev/stdin').toString();
let temp = '';

for(let i = 1; i <= input; i++) {
  temp = ' '.repeat(input-i) + '*'.repeat(i);
  console.log(temp);
}