const games = window.prompt("I have three games in my collection. Pick a number between 1 and 3, and I'll tell you about that game!");

const myGames = [
    { 
        game: "Scrabble", 
        numberOfPlayers: 2, 
        format: "a board", 
        description: "is a board game made up of connecting letters and spelling words." 
    },

    { 
        game: "Jenga", 
        numberOfPlayers: 2, 
        format: "blocks", 
        description: "is a a building block balancing game." 
    },

    { 
        game: "Catch Phrase", 
        numberOfPlayers: 6, 
        format: "electronic", 
        description: "is a very intense game when played in a large group." 
    },
];

window.alert(
    "You selected " +
      myGames[games - 1].game +
      ", which is a " +
      myGames[games - 1].numberOfPlayers +
      " player game" +
      " and is played using a " +
      myGames[games - 1].format +
      ". It is " +
      myGames[games - 1].description
  );
