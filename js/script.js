"use strict";

let nuberOfFilm = +prompt("Скільки фільмів ти подивився?", ""); // ставимо +щоб повернувся number

const personalMovieDB = {
  count: nuberOfFilm,
  movies: {},
  actor: {},
  genres: [],
  privat: false,
};
let moviesWatch = prompt("Назвіть один з останніх переглянутих фільмів?", "");
let movieReit = prompt("На скільки ви оцінете фльм?", "");
let moviesWatch2 = prompt("Назвіть один з останніх переглянутих фільмів?", "");
let movieReit2 = prompt("На скільки ви оцінете фльм?", "");

personalMovieDB.movies[moviesWatch] = movieReit;
personalMovieDB.movies[moviesWatch2] = movieReit2;
console.log(personalMovieDB);
