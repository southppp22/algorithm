//stack

function solution(s) {
  const stack = [];

  for (let c of s) {
    if (c == "(") {
      stack.push(c);
    }

    if (c == ")") {
      const v = stack.pop();

      if (!v) {
        return false;
      }
    }
  }

  return stack.length == 0 ? true : false;
}
