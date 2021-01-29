const games = window.prompt("I have three games in my collection. Pick a number between 1 and 3, and I'll tell you about that game!");

const myGames = [
    { game: "Scrabble", numberOfPlayers: 4, format: "a board", description: "is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares." },
    { game: "Sequence", numberOfPlayers: 2, format: "a board, cards", description: "is an abstract strategy board-and-card game. The object of the game is to form rows of five poker chips on the board by placing the chips on the board spaces corresponding to cards played from the player's hand." },
    { game: "Catch Phrase", numberOfPlayers: 6, format: "electronic", description: "is the frenzied game of fast talking and fast passing. Get the word or phrase, and rattle off as many clues as you can until your team guesses it." },
];

console.log("You selected " + myGames[games - 1].game + ", which is a " + myGames[games - 1].numberOfPlayers + " player game" + " and is played using " + myGames[games - 1].format + ". It " + myGames[games - 1].description);