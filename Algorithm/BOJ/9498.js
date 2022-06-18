const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();

const answer = Number(input);

if(answer >= 90) console.log('A');
else if(answer >= 80) console.log('B');
else if(answer >= 70) console.log('C');
else if(answer >= 60) console.log('D');
else console.log('F');