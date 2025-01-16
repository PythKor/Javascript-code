const team = {
  _players: [
    {firstName: 'Panos',
     lastName: 'Koromilas',
     age: 28 },
    {firstName: 'Vasilis',
     lastName: 'Georgakas',
     age: 28 },
     {firstName: 'Kwstas',
     lastName: 'Kavourinos',
     age: 28 }
  ],
  _games: [
    {opponent: 'Olimpiakos',
      teamPoints: 35,
      opponentPoints: 31},
      {opponent: 'PAS Giannena',
      teamPoints: 45,
      opponentPoints: 12},
      {opponent: 'Aek',
      teamPoints: 78,
      opponentPoints: 34}
  ],
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    const newPlayer= {
    firstName: newFirstName, 
    lastName: newLastName,
    age: newAge
    };
    this._players.push(newPlayer);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};
team.addPlayer('Bugs','Bunny', 76 );
console.log(team._players);

team.addGame('Panathinaikos', 100, 98);
console.log(team._games);















