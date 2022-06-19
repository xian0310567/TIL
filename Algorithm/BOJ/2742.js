const input = require('fs').readFileSync('dev/stdin').toString();
let result = '';

for(let i = input; i > 0; i--) {
  result += Number(i) + '\n';
}

console.log(result.trim());