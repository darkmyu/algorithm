const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(' ');

let count = 0;

input.forEach((word) => {
  if (word !== '') {
    count++;
  }
});

console.log(count);
