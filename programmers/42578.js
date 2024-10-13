function solution(clothes) {
  const map = {};

  for (let [n, c] of clothes) {
    map[c] = map[c] ? [...map[c], n] : [n];
  }

  return (
    Object.values(map)
      .map((v) => v.length)
      .reduce((acc, cur) => (cur + 1) * acc, 1) - 1
  );
}
