const movie = window.prompt("What is your favorite movie?");

const myMovies = [
    "The Greatest Showman",
    "Bridesmaids",
    "Someone Great",
    "I Love You Man",
    "Forgetting Sarah Marshall"
];
console.log(myMovies);
myMovies.push(movie);
console.log(myMovies.toString());
window.alert(myMovies)