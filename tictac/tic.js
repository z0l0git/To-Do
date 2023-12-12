const cells = document.querySelectorAll(".cell");
let turn = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(event) {
  if (event.target.textContent !== "") return;
  event.target.textContent = turn;
  if (checkWin(turn)) {
    setMessage(`Player ${turn} wins!`);
    cells.forEach((cell) => cell.removeEventListener("click"));
    return;
  }
  turn = turn === "X" ? "O" : "X";
  setMessage(`It's ${turn}'s turn!`);
  if (isBoardFull()) {
    setMessage("It's a draw!");
    cells.forEach((cell) => cell.removeEventListener("click"));
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function checkWin(player) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    if (condition.every((i) => cells[i].textContent === player)) {
      return true;
    }
  }
  return false;
}

function isBoardFull() {
  return cells.every((cell) => cell.textContent !== "");
}
