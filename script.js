var players = [
    { name: 'Player 1', team: 'Team A', position: 'Guard', points: 20 },
    { name: 'Player 2', team: 'Team B', position: 'Center', points: 25 },
    // Add more players as needed
];

var playerList = document.getElementById('playerList');

players.forEach(function(player) {
    var playerDiv = document.createElement('div');
    playerDiv.innerHTML = `<h3>${player.name}</h3><p>Team: ${player.team}</p><p>Position: ${player.position}</p><p>Points per game: ${player.points}</p>`;
    playerList.appendChild(playerDiv);
});