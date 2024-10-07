function solution(s) {
  //1. s에서 수들을 뽑아낸다.
  const numbers = s
    .split(" ")
    .map((v) => (v[0] == "-" ? +v.slice(1) * -1 : +v));

  //2. 최소값과 최대값을 리턴한다.
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}
