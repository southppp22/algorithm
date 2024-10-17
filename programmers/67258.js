function solution(gems) {
  const gemTypes = new Set(gems).size;
  const gemMap = new Map();
  let answer = [0, gems.length];
  let start = 0;
  let end = 0;

  for (; end < gems.length; end++) {
    gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);

    while (gemMap.size === gemTypes) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
      if (gemMap.get(gems[start]) === 0) {
        gemMap.delete(gems[start]);
      }
      start++;
    }
  }

  return answer;
}
