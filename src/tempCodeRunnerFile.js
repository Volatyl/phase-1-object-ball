function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoeSize;

  for (const team in myObject) {
    for (const player in myObject[team].players) {
      if (parseInt(myObject[team].players[player].shoe) > largestShoeSize) {
        largestShoeSize = parseInt(myObject[team].players[player].shoe);
        playerWithLargestShoeSize = myObject[team].players[player];
      }
    }
  }
  return `${playerWithLargestShoeSize.rebounds} player: ${playerWithLargestShoeSize} shoe: ${largestShoeSize}`;
}