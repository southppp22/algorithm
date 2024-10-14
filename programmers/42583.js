function solution(bridge_length, weight, truck_weights) {
  let answer = 1;

  let l = [...truck_weights],
    a = [],
    b = [];

  function move() {
    const t = l.shift();

    if (t) {
      const current_bridge_weight = b.reduce((total, v) => total + v.weight, 0);

      const can_proccess_t =
        b.length < bridge_length && current_bridge_weight + t <= weight;

      if (can_proccess_t) {
        b.push({ location: 0, weight: t });
      } else {
        l.unshift(t);
      }
    }

    return b.map((v) => ({ weight: v.weight, location: v.location + 1 }));
  }

  while (a.length != truck_weights.length) {
    const moved = move();

    if (moved?.[0].location == bridge_length) {
      a.push(moved[0]);
      b = moved.slice(1);
    } else {
      b = moved;
    }

    answer++;
  }

  return answer;
}
