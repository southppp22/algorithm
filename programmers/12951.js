function solution(s) {
  const words = s.split(" ");

  return words
    .map((word) => {
      let formatted = "";

      for (let i = 0; i < word.length; i++) {
        if (i == 0) {
          formatted += word[i].toUpperCase();
        } else {
          formatted += word[i].toLowerCase();
        }
      }

      return formatted;
    })
    .join(" ");
}
