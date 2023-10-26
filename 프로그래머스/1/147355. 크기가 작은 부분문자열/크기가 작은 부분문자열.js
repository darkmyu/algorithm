function solution(t, p) {
  let result;
  const array = [];
  const words = t.split('');
  const pLength = p.split('').length;

  for (let i = 0; i <= words.length - pLength; i++) {
    result = words[i];

    for (let j = 1; j < pLength; j++) {
      result += words[i + j];
    }

    array.push(result);
  }

  return array.filter(a => a <= p).length;
}
