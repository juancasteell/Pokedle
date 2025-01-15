const dictionary = ["earth", "plane", "crane", "audio", "house"];

const state = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentCol: 0,
  keyboardState: {},
};

function drawGrid(container) {
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      drawBox(grid, i, j);
    }
  }

  container.appendChild(grid);
}

function drawKeyboard(container) {
  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";

  const keys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  keys.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "keyboard-row";

    row.split("").forEach((key) => {
      const keyDiv = document.createElement("div");
      keyDiv.className = "key";
      keyDiv.id = `key-${key}`;
      keyDiv.textContent = key;

      // Registrar evento de clic
      keyDiv.addEventListener("click", () => handleVirtualKeyPress(key));

      rowDiv.appendChild(keyDiv);
    });

    keyboard.appendChild(rowDiv);
  });

  // Crear la fila especial para "Enter" y "Backspace"
  const specialRow = document.createElement("div");
  specialRow.className = "keyboard-row special-row";

  // Botón "Enter"
  const enterKey = document.createElement("div");
  enterKey.className = "key special-key";
  enterKey.id = "key-enter";
  enterKey.textContent = "✔";
  enterKey.addEventListener("click", () => handleVirtualKeyPress("Enter"));
  specialRow.appendChild(enterKey);

  // Agregar un espaciador central para alinear
  const spacer = document.createElement("div");
  spacer.className = "spacer";
  specialRow.appendChild(spacer);

  // Botón "Backspace"
  const backspaceKey = document.createElement("div");
  backspaceKey.className = "key special-key";
  backspaceKey.id = "key-backspace";
  backspaceKey.textContent = "⌫";
  backspaceKey.addEventListener("click", () => handleVirtualKeyPress("Backspace"));
  specialRow.appendChild(backspaceKey);

  keyboard.appendChild(specialRow);

  container.appendChild(keyboard);
}

function handleVirtualKeyPress(key) {
  if (key === "Enter") {
    if (state.currentCol === 5) {
      const word = getCurrentWord();
      if (isWordValid(word)) {
        revealWord(word);
        state.currentRow++;
        state.currentCol = 0;
      } else {
        alert("Not a valid word.");
      }
    }
  } else if (key === "Backspace") {
    removeLetter();
  } else if (isLetter(key)) {
    addLetter(key);
  }

  updateGrid();
}

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box-${i}-${j}`);
      box.textContent = state.grid[i][j];
    }
  }
}

function updateKeyboard() {
  for (const [letter, status] of Object.entries(state.keyboardState)) {
    const key = document.getElementById(`key-${letter}`);
    if (key) {
      key.className = `key ${status}`;
    }
  }
}

function drawBox(container, row, col, letter = "") {
  const box = document.createElement("div");
  box.className = "box";
  box.id = `box-${row}-${col}`;
  box.textContent = letter;

  container.appendChild(box);
  return box;
}

function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      if (state.currentCol === 5) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
          revealWord(word);
          state.currentRow++;
          state.currentCol = 0;
        } else {
          alert("Not a valid word.");
        }
      }
    }
    if (key === "Backspace") {
      removeLetter();
    }
    if (isLetter(key)) {
      addLetter(key);
    }

    updateGrid();
  };
}

function getCurrentWord() {
  return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

function isWordValid(word) {
  return dictionary.includes(word);
}

function revealWord(guess) {
  const row = state.currentRow;
  const animation_duration = 500; //ms

  for (let i = 0; i < 5; i++) {
    const box = document.getElementById(`box-${row}-${i}`);
    const letter = box.textContent;

    setTimeout(() => {
      if (letter === state.secret[i]) {
        box.classList.add("right");
        state.keyboardState[letter] = "right";
      } else if (state.secret.includes(letter)) {
        box.classList.add("wrong");
        if (state.keyboardState[letter] !== "right") {
          state.keyboardState[letter] = "wrong";
        }
      } else {
        box.classList.add("empty");
        state.keyboardState[letter] = "empty";
      }
      updateKeyboard();
    }, ((i + 1) * animation_duration) / 2);

    box.classList.add("animated");
    box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
  }
  const isWinner = state.secret === guess;
  const isGameOver = state.currentRow === 5;

  setTimeout(() => {
    if (isWinner) {
      alert("Ganaste");
    } else if (isGameOver) {
      alert(`Buena suerte para la próxima! La palabra era: ${state.secret}.`);
    }
  }, 3 * animation_duration);
}

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
  if (state.currentCol === 5) return;
  state.grid[state.currentRow][state.currentCol] = letter;
  state.currentCol++;
}

function removeLetter() {
  if (state.currentCol === 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = "";
  state.currentCol--;
}

function startup() {
  const game = document.getElementById("game");
  drawGrid(game);
  drawKeyboard(game);

  registerKeyboardEvents();

  console.log("Chivatazo: " + state.secret);
}

startup();
