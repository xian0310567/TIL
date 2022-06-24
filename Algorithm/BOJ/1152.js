const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

const temp = input.filter(a => a == '');

temp === undefined ? console.log(input.length) : console.log(input.length - temp.length);