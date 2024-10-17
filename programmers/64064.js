function solution(user_id, banned_id) {
  const isSimilar = (userId, bannedId) => {
    let result = true;

    if (userId.length != bannedId.length) {
      return false;
    }

    for (let i = 0; i < bannedId.length; i++) {
      const bc = bannedId[i];
      const uc = userId[i];

      if (bc == "*") continue;

      if (bc != uc) {
        result = false;
        break;
      }
    }

    return result;
  };

  const similarIds = banned_id.map((bannedId) =>
    user_id.filter((user) => isSimilar(user, bannedId))
  );

  function getCombinations(arrays) {
    const result = new Set();

    function backtrack(temp, index) {
      if (index === arrays.length) {
        result.add(temp.slice().sort().join(","));
        return;
      }

      for (let i = 0; i < arrays[index].length; i++) {
        const current = arrays[index][i];
        if (!temp.includes(current)) {
          temp.push(current);
          backtrack(temp, index + 1);
          temp.pop();
        }
      }
    }

    backtrack([], 0);
    return Array.from(result).map((item) => item.split(","));
  }

  return getCombinations(similarIds).length;
}
