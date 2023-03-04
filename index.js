const CreateState = (dimension) => ({
  currentPlayer: null,
  winner: null,
  isDraw: false,
  board: Array.from({ length: dimension }, () =>
    Array.from({ length: dimension }, () => null)
  ),
});

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
  [...board.keys()].every((_, _i) => board[_i][_i] === currentPlayer);

const VerticalCheck = (board, currentPlayer) =>
  [...board.keys()].some((_c) =>
    [...board.keys()].every((_i) => board[_i][_c] === currentPlayer)
  );

const HorizontalCheck = (board, currentPlayer) =>
  board.some((_r) => _r.every((_c) => _c === currentPlayer));

const CheckDraw = (board) => board.every((_r) => _r.every((_c) => _c !== null));

const FindEmptyCell = (board) => {
  const randomRow = Math.floor(Math.random() * board.length);
  const randomCell = [...board.keys()][
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
  board.forEach((row) => {
    console.log(row.map((value) => value || "-").join(" "));
  });
};

const RunApp = async (dimension = 3) => {
  let State = CreateState(dimension);

  State.currentPlayer = ["X", "O"][Math.floor(Math.random() * 2)];
  var i = 1;

  while (State.winner === null && !State.isDraw) {
    State = await (function (data, i) {
      return new Promise((resolve) => {
        setTimeout(function () {
          const cell = FindEmptyCell(data.board);
          resolve(Move(data, cell));
        }, 300 * i);
      });
    })(State, i++);
    DisplayBoard(State.board);
    console.log("----------");
  }
  if (State.winner) {
    console.log("WINNER => " + State.winner);
  } else if (State.isDraw) {
    console.log("GAME DRAW!");
  }
};

RunApp(3);
