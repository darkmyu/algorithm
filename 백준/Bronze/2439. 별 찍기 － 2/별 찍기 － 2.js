const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

for (let i = 1; i <= input; i++) {
  const empty = ' '.repeat(input - i);
  const star = '*'.repeat(i);
  console.log(empty + star);
}
