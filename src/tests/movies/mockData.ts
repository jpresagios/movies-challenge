import casual from 'casual';

import Movie from '../../interfaces/movie';

const moviesMock: Movie[] = [];

for (let i = 0; i <= 5; i += 1) {
  moviesMock.push({
    _id: i,
    title: casual.title,
    description: casual.description,
    releaseYear: casual.year,
    images: { posterArt: { url: casual.url } },
  });
}

export default moviesMock;
