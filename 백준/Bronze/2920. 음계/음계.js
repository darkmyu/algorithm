const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(' ').map(Number);

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

if (JSON.stringify(ascending) === JSON.stringify(input)) {
  console.log('ascending');
} else if (JSON.stringify((descending)) === JSON.stringify(input)) {
  console.log('descending');
} else {
  console.log('mixed');
}
