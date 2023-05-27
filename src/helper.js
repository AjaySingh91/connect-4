export const isWinner = (GameBoard, currentMove, currentPlayer) => {
  let board = [...GameBoard];
  board[currentMove] = currentPlayer;
  const winLine = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 16],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < winLine.length; i++) {
    const [c1, c2, c3, c4] = winLine[i];

    if (
      board[c1] > 0 &&
      board[c1] === board[c2] &&
      board[c2] === board[c3] &&
      board[c3] === board[c4]
    ) {
      return true;
    }
  }
  return false;
};

export const isDraw = (GameBoard, currentMove, currentPlayer) => {
  let board = [...GameBoard];
  board[currentMove] = currentPlayer;

  let count = board.reduce((n, x) => n + (x === 0), 0);
  console.log(`count ${count}`);
  return count === 0;
};

export const getRanComputerMove = (gameBoard) => {
  let validMoves = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 0) {
      validMoves.push(i);
    }
  }
  let randmMove = Math.floor(Math.random() * validMoves.length);
  return validMoves[randmMove];
};

const getPosition = (gameBoard, movechecks) => {
  for (let check = 0; check < movechecks.length; check++) {
    for (let i = 0; i < movechecks[check].max; i += movechecks[check].step) {
      let series =
        gameBoard[i + movechecks[check].indexes[0]].toString() +
        gameBoard[i + movechecks[check].indexes[1]].toString() +
        gameBoard[i + movechecks[check].indexes[2]].toString() +
        gameBoard[i + movechecks[check].indexes[3]].toString();

      switch (series) {
        case "1110":
        case "2220":
          return i + movechecks[check].indexes[3];

        case "1101":
        case "2202":
          return i + movechecks[check].indexes[2];

        case "1011":
        case "2022":
          return i + movechecks[check].indexes[1];

        case "0111":
        case "0222":
          return i + movechecks[check].indexes[0];
        default:
          break;
      }
    }
  }
  return -1;
};

export const getComputerMove = (gameBoard) => {
  let movechecks = [
    {
      indexes: [0, 4, 8, 12],
      max: 4,
      step: 1,
    },
    {
      indexes: [0, 1, 2, 3],
      max: 16,
      step: 4,
    },
    {
      indexes: [0, 5, 10, 15],
      max: 16,
      step: 16,
    },
    {
      indexes: [3, 6, 9, 12],
      max: 16,
      step: 16,
    },
  ];
  let position = getPosition(gameBoard, movechecks);
  if (position > -1) return position;
  return getRanComputerMove(gameBoard);
};
