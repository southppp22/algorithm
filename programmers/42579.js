function solution(genres, plays) {
  if (genres.length === 0) return [];

  const genrePlaysMap = {};
  const genreSongsMap = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    const id = i;

    genrePlaysMap[genre] = (genrePlaysMap[genre] || 0) + play;

    if (genreSongsMap[genre]) {
      genreSongsMap[genre].push({ id, play });
    } else {
      genreSongsMap[genre] = [{ id, play }];
    }
  }

  const sortedGenres = Object.keys(genrePlaysMap).sort(
    (a, b) => genrePlaysMap[b] - genrePlaysMap[a]
  );

  const bestAlbum = [];

  for (let i = 0; i < sortedGenres.length; i++) {
    const genre = sortedGenres[i];
    const songs = genreSongsMap[genre];

    const sortedSongs = songs.sort((a, b) => {
      return b.play - a.play;
    });

    sortedSongs.slice(0, 2).forEach((v) => {
      if (v) bestAlbum.push(v.id);
    });
  }

  return bestAlbum;
}
