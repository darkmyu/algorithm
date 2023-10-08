function solution(s) {
  let stack = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    stack.includes(s[i]) ? answer.push(stack.length - stack.lastIndexOf(s[i])) : answer.push(-1);
    stack.push(s[i]);
  }
  return answer;
}