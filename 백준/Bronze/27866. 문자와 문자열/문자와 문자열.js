const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

console.log(input[0][input[1] - 1]);
