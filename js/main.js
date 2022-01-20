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

do {
	filmTitle = prompt('One of the last movies you saw?', '');
	filmRate = +prompt('How much would you estimate it?', '');

	if (filmTitle === '' || filmRate === 0 || filmTitle.length > 50 ||
			filmTitle === null || filmRate === null) {
		i = 2;
	} else {
		personalMovieDB.movies[filmTitle] = filmRate;
	}
	i--;
} while (i);

if (personalMovieDB.count < 10) {
	alert('Seen quite a few movies.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
	alert('You are a classic viewer.');
} else if (personalMovieDB.count > 30) {
	alert('You are a movie buff.');
} else {
	alert('There was an error.');
}

console.log(personalMovieDB);