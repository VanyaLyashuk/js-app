const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// const firstFilmTitle = prompt('One of the last movies you saw?', '');
// const firstFilmRate = prompt('How much would you estimate it?', '');
// const secondFilmTitle = prompt('One of the last movies you saw?', '');
// const secondFilmRate = prompt('How much would you estimate it?', '');

// automate user input use while
let i = 2;
let filmTitle,
		filmRate;

while (i) {
	filmTitle = prompt('One of the last movies you saw?', '');
	filmRate = +prompt('How much would you estimate it?', '');

	if (filmTitle === '' || filmRate === 0 || filmTitle.length > 50 ||
			filmTitle === null || filmRate === null) {
		i = 2;
	} else {
		personalMovieDB.movies[filmTitle] = filmRate;
	}
	i--;
}

console.table(personalMovieDB);