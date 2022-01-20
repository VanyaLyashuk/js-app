const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// automate user input use while
let filmTitle,
		filmRate;

for (let i = 1; i <= 2; i++) {
	filmTitle = prompt('One of the last movies you saw?', '');
	filmRate = +prompt('How much would you estimate it?', '');

	if (filmTitle === '' || filmRate === 0 || filmTitle.length > 50 ||
			filmTitle === null || filmRate === null) {
		i = 1;
	} else {
		personalMovieDB.movies[filmTitle] = filmRate;
	}
}

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