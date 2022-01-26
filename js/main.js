'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: true,
	start() {
		this.count = +prompt('How many movies have you seen?', '');
	
		while(this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('How many movies have you seen?', '');
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const filmTitle = prompt('One of the last movies you saw?', '');
			const filmRate = +prompt('How much would you estimate it?', '');
		
			if (filmTitle != '' && filmRate != 0 && filmTitle.length <= 50 &&
					filmTitle != null && filmRate != null) {
						this.movies[filmTitle] = filmRate;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel() {
		if (this.count < 10) {
			alert('Seen quite a few movies.');
		} else if (this.count >= 10 && this.count <= 30 ) {
			alert('You are a classic viewer.');
		} else if (this.count > 30) {
			alert('You are a movie buff.');
		} else {
			alert('There was an error.');
		}
	},
	writeYourGenres() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Your favourite genre by number: ${i}`);
	
			if (genre == '' || genre == null) {
				i--;
			} else {
				this.genres.push(genre);
			}
		}
	},
	printGenres() {
		this.genres.forEach((item, count)=>{
			console.log(`Favourite genre ${++count} is ${item}`);
		});
	},
	toggleVisibleMyDB() {
		if (this.private) {
			this.private = false;
		} else {
			this.private = true;
		}
	},
	showMyDB() {
		if (!this.private) {
			console.log(this);
		}
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.printGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

