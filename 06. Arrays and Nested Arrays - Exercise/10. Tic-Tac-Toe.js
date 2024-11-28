function ticTacToe(turns) {

  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  let turnsMade = 0;
  let currTurn = "X";
  let winner;

  for (let turn = 0; turn < turns.length; turn++) {
    const coordinates = turns[turn];
    const X = Number(coordinates[0]);
    const Y = Number(coordinates[2]);

    if (dashboard[X][Y] === false) {
      turnsMade % 2 === 0 ? currTurn = "X" : currTurn = "O";
      dashboard[X].splice(Y, 1, currTurn);
      turnsMade++;

      if (!dashboard.some(innerArray => innerArray.includes(false))) {
        console.log("The game ended! Nobody wins :(");
        break
      }

      if (haveWinner(dashboard)) {
        winner = currTurn;
        console.log(`Player ${winner} wins!`);
        break
      }
    } else {
      console.log("This place is already taken. Please choose another!");
      continue
    }

  }

  for (const row of dashboard) {
    console.log(row.join("\t"));
  }

  function haveWinner(dashboard) {
    const diagonal1 = (
      dashboard[0][0] !== false &&
      dashboard[0][0] === dashboard[1][1] &&
      dashboard[0][0] === dashboard[2][2]
    );
    const diagonal2 = (
      dashboard[1][1] !== false &&
      dashboard[1][1] === dashboard[0][2] &&
      dashboard[1][1] === dashboard[2][0]
    );

    const row1 = (
      dashboard[0][0] !== false &&
      dashboard[0][0] === dashboard[0][1] &&
      dashboard[0][0] === dashboard[0][2]
    );
    const row2 = (
      dashboard[1][0] !== false &&
      dashboard[1][0] === dashboard[1][1] &&
      dashboard[1][0] === dashboard[1][2]
    );
    const row3 = (
      dashboard[2][0] !== false &&
      dashboard[2][0] === dashboard[2][1] &&
      dashboard[2][0] === dashboard[2][2]
    );

    const col1 = (
      dashboard[0][0] !== false &&
      dashboard[0][0] === dashboard[1][0] &&
      dashboard[0][0] === dashboard[2][0]
    );
    const col2 = (
      dashboard[0][1] !== false &&
      dashboard[0][1] === dashboard[1][1] &&
      dashboard[0][1] === dashboard[2][1]
    );
    const col3 = (
      dashboard[0][2] !== false &&
      dashboard[0][2] === dashboard[1][2] &&
      dashboard[0][2] === dashboard[2][2]
    );

    const res = (
      diagonal1 || diagonal2 ||
      row1 || row2 || row3 ||
      col1 || col2 || col3
    );
    return res
  }

}

// ticTacToe(["0 0",
//   "0 0",
//   "1 1",
//   "0 1",
//   "1 2",
//   "0 2",
//   "2 2",
//   "1 2",
//   "2 2",
//   "2 1"
// ]);
ticTacToe(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0"
]);
