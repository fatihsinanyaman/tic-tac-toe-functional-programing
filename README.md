# Functional Programming Example:

## Tic-Tac-Toe Game

This is a simple implementation of a Tic-Tac-Toe game using functional programming concepts in JavaScript. The game has been implemented in a purely functional way, avoiding any state mutation, loops, and side-effects.

## Features

- The game is implemented using the functional programming paradigm.
- Pure functions are used to manipulate the game state.
- The game's state is immutable and can only be modified by returning a new state.
- No side effects are used in the code.
- The game uses recursion instead of iteration to perform tasks.
- The game's logic is purely functional, and no objects or classes are used.
- The code is designed to be modular and reusable, allowing for easy testing and extension.

## How to Play

This Tic Tac Toe game is played by an algorithm and doesn't require user input. The algorithm will play against itself until either a player wins or the game ends in a draw.

To run the game, simply call the RunApp function at the bottom of the code with the desired dimension of the board (default is 3). The game will then automatically start and display the board after each move.

The winner will be displayed in the console once the game is over.

## Code Structrues

The code is structured into the following functions:

- `CreateState(dimension):` creates a new game state with the given dimension (default is 3).
- `Move(STATE, {x, y}):` updates the game state with a move to the cell at (x, y).
  CheckFinish(board, currentPlayer): checks if the game has been won by the current player.
- `CrossCheck(board, currentPlayer):` checks if the game has been won by the current player diagonally.
- `VerticalCheck(board, currentPlayer):` checks if the game has been won by the current player vertically.
- `HorizontalCheck(board, currentPlayer):` checks if the game has been won by the current player horizontally.
- `CheckDraw(board):` checks if the game has ended in a draw.
- `FindEmptyCell(board):` finds an empty cell on the board.
- `DisplayBoard(board):` displays the current state of the board in the console.
- `RunApp(dimension):` runs the game with the given dimension (default is 3).

## Usage

To run the game, simply run the following command in the terminal:

```sh
node index.js
```

The default board size is 3x3, but you can change this by passing an argument to the RunApp function. For example, to run the game with a 4x4 board, run the following command:

```sh
RunApp(5);
```

## Conclusion

In conclusion, this Tic Tac Toe game project demonstrates the implementation of several functional programming concepts. The use of pure functions, immutable data, higher-order functions, recursion, and declarative code makes the game code more readable, maintainable, and less prone to errors.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to the project. If you encounter any issues or have any suggestions, please open an issue on the repository's issue tracker.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
