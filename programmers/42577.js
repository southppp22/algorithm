function solution(phone_book) {
  const map = new Map();

  for (let phone of phone_book) {
    map.set(phone, true);
  }

  for (let [phone] of map) {
    const c = [];

    for (let i = 1; i < phone.length; i++) {
      c.push(phone.slice(0, i));
    }

    for (let i = 0; i < c.length; i++) {
      if (map.get(c[i])) {
        return false;
      }
    }
  }

  return true;
}
