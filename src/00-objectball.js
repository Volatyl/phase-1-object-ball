let pr = console.log;
function gameObject() {
  const teams = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slumDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slumDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "6",
          steals: "3",
          blocks: "8",
          slumDunks: "5",
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slumDunks: "5",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "4",
          blocks: "11",
          slumDunks: "1",
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slumDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slumDunks: "10",
        },
        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slumDunks: "5",
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slumDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slumDunks: "12",
        },
      },
    },
  };
  return teams;
}

function homeTeamName() {
  const object = gameObject();
  return object.home.teamName.players[0].shoe;
}

const myObject = gameObject();

function numPointsScored(playerName) {
  let pointsScored;
  for (const team in myObject) {
    const players = myObject[team].players;
    for (const player in players)
      if (player === playerName) {
        pointsScored = players[playerName].points;
      }
  }
  return pointsScored;
}

function shoeSize(playerName) {
  let shoeSize;
  for (const team in myObject) {
    const players = myObject[team].players;
    for (const player in players)
      if (player === playerName) {
        shoeSize = players[playerName].shoe;
      }
  }
  return shoeSize;
}

function teamColors(teamName) {
  for (const team in myObject) {
    if (myObject[team].teamName === teamName) {
      return myObject[team].colors;
    }
  }
  return null;
}

function teamNames() {
  let teamNamesArray = [];
  for (const team in myObject) {
    teamNamesArray.push(myObject[team].teamName);
  }
  return teamNamesArray;
}

function playerNumbers(teamName) {
  let numbers = [];
  for (const team in myObject) {
    let players;
    if (myObject[team].teamName === teamName) {
      players = myObject[team].players;
    }
    for (const player in players) {
      numbers.push(players[player].number);
    }
  }
  return numbers;
}

function playerStats(playerName) {
  for (const team in myObject) {
    const players = myObject[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName];
    }
  }
  return null;
}

function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoeSize;
  let rebounds;

  for (const team in myObject) {
    for (const player in myObject[team].players) {
      if (parseInt(myObject[team].players[player].shoe) > largestShoeSize) {
        largestShoeSize = parseInt(myObject[team].players[player].shoe);
        playerWithLargestShoeSize = player;
        rebounds = player.rebounds;
      }
    }
  }
  return `Player: ${playerWithLargestShoeSize} shoe size: ${largestShoeSize} ${rebounds}`;
}

pr(bigShoeRebounds());
