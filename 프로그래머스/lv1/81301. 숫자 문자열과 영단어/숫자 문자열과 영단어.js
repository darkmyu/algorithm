function solution(s) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return +words.map((word, index) => (s = s.split(word).join(index))).pop();
}
