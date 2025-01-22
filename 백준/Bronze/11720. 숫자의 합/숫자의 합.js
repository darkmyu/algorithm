const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

const sum = input[1].split('').map(Number).reduce((sum, num) => sum + num, 0);
console.log(sum);
