function solution(progresses, speeds) {
  let answer = [];

  let leftDays = progresses.map((progress, i) => {
    const leftProgress = 100 - progress;
    return Math.ceil(leftProgress / speeds[i]);
  });

  let deployDay = leftDays[0];
  let count = 1;

  for (let i = 1; i < leftDays.length; i++) {
    if (leftDays[i] <= deployDay) {
      count++;
    } else {
      answer.push(count);
      deployDay = leftDays[i];
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}
