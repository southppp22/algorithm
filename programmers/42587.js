function solution(priorities, location) {
  var answer = 0;

  let queue = priorities.map((v, i) => ({
    id: i,
    priority: v,
  }));

  const target = queue[location];

  while (queue.length != 0) {
    const c = queue.shift();

    const needSkip = queue.find((v) => v.priority > c.priority);

    if (needSkip) {
      queue.push(c);
    } else {
      answer += 1;

      if (c.id == target.id) {
        break;
      }
    }
  }

  return answer;
}

const answer = solution([2, 1, 3, 2], 2);
console.log(answer);
