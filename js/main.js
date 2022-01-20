'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('How many movies have you seen?', '');
	
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many movies have you seen?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// automate user input use while

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const filmTitle = prompt('One of the last movies you saw?', '');
		const filmRate = +prompt('How much would you estimate it?', '');
	
		if (filmTitle != '' && filmRate != 0 && filmTitle.length <= 50 &&
				filmTitle != null && filmRate != null) {
					personalMovieDB.movies[filmTitle] = filmRate;
		} else {
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Seen quite a few movies.');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
		alert('You are a classic viewer.');
	} else if (personalMovieDB.count > 30) {
		alert('You are a movie buff.');
	} else {
		alert('There was an error.');
	}
}

detectPersonalLevel();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Your favourite genre by number: ${i}`);

		if (genre == '' || genre == null) {
			i--;
		} else {
			personalMovieDB.genres.push(genre);
		}
	}
}

writeYourGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.private);

