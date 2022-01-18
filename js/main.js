const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const firstFilmTitle = prompt('One of the last movies you saw?', '');
const firstFilmRate = prompt('How much would you estimate it?', '');
const secondFilmTitle  = prompt('One of the last movies you saw?', '');
const secondFilmRate = prompt('How much would you estimate it?', '');

personalMovieDB.movies[firstFilmTitle] = firstFilmRate;
personalMovieDB.movies[secondFilmTitle] = secondFilmRate;

console.table(personalMovieDB);