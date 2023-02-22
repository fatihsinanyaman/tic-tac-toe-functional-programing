let STATE = {
  currentPlayer: null,
  winner: null,
  isDraw: false,
  board: [
    {
      a: null,
      b: null,
      c: null,
    },
    {
      a: null,
      b: null,
      c: null,
    },
    {
      a: null,
      b: null,
      c: null,
    },
  ],
};

const Move = (STATE, { x, y }) => {
  if (STATE.board[y][x] !== null) {
    console.error("You cannot this move!");
    return STATE;
  }

  STATE.board[y][x] = STATE.currentPlayer;

  if (CheckFinish(STATE.board, STATE.currentPlayer)) {
    STATE.winner = STATE.currentPlayer;
  } else if (CheckDraw(STATE.board)) {
    STATE.isDraw = true;
  }

  STATE.currentPlayer = STATE.currentPlayer === "X" ? "O" : "X";
  return STATE;
};

const CheckFinish = (board, currentPlayer) =>
  VerticalCheck(board, currentPlayer) ||
  HorizontalCheck(board, currentPlayer) ||
  CrossCheck(board, currentPlayer) ||
  CrossCheck([...board].reverse(), currentPlayer);

const CrossCheck = (board, currentPlayer) =>
  Object.keys(board).every(
    (_, _i) => Object.values(board[_i])[_i] === currentPlayer
  );

const VerticalCheck = (board, currentPlayer) =>
  Object.keys(board[0]).some((_c) =>
    Object.keys(board).every((_i) => board[_i][_c] === currentPlayer)
  );

const HorizontalCheck = (board, currentPlayer) =>
  board.some((_r) => Object.values(_r).every((_c) => _c === currentPlayer));

const CheckDraw = (board) =>
  board.every((_r) => Object.values(_r).every((_c) => _c !== null));

const FindEmptyCell = (board) => {
  const randomRow = Math.floor(Math.random() * board.length);
  const randomCell = Object.keys(board[0])[
    Math.floor(Math.random() * board.length)
  ];
  if (board[randomRow][randomCell] === null) {
    return {
      y: randomRow,
      x: randomCell,
    };
  }
  return FindEmptyCell(board);
};

const DisplayBoard = (board) => {
  Object.keys(board).forEach((_i) => {
    console.log(
      Object.values(board[_i])
        .map((value) => value || "-")
        .join(" ")
    );
  });
};

const RunApp = async () => {
  STATE.currentPlayer = "X";
  var i = 1;

  while (STATE.winner === null && !STATE.isDraw) {
    STATE = await (function (data, i) {
      return new Promise((resolve) => {
        setTimeout(function () {
          const cell = FindEmptyCell(data.board);
          resolve(Move(data, cell));
        }, 300 * i);
      });
    })(STATE, i++);
    DisplayBoard(STATE.board);
    console.log("----------");
  }
  if (STATE.winner) {
    console.log("WINNER => " + STATE.winner);
  } else if (STATE.isDraw) {
    console.log("GAME DRAW!");
  }
};

RunApp();
