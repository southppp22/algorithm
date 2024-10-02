function solution(n) {
  const answer = [];

  function move(from, to) {
    answer.push([from, to]);
  }

  function hanoiTower(n, from, to, tmp) {
    if (n == 1) {
      move(from, to);
    } else {
      hanoiTower(n - 1, from, tmp, to);
      move(from, to);
      hanoiTower(n - 1, tmp, to, from);
    }
  }

  hanoiTower(n, 1, 3, 2);

  return answer;
}
