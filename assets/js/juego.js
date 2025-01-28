import { initMenuDesplegable } from "./script.js";

import { getPokemonRandomGeneracion } from "./gen.js";
import { getRandomLegendary, handleLegendaryChange } from "./legendarios.js";
import { getPokemonRandomTipo } from "./tipo.js";
import { getRandomTrainer, updateTrainerGeneration } from "./trainers.js";

let dictionary = ["pokemon"]; // Declarar inicialmente
let pokemonNombre = "";

document.addEventListener("DOMContentLoaded", () => {
  initMenuDesplegable();
});

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  switch (page) {
    case "generaciones":
      const selectGeneracion = document.getElementById("select-gen"); // ID del select en el HTML
      selectGeneracion.addEventListener("change", async (event) => {
        pokemonNombre = await getPokemonRandomGeneracion(event);
        if (pokemonNombre) {
          dictionary = [pokemonNombre]; // Actualizamos el diccionario con la nueva palabra
          restartGame(); // Reiniciamos el juego con la nueva palabra
        }
      });
      break;

    case "legendarios":
      const selectLegendario = document.getElementById("select-LeGen");
      selectLegendario.addEventListener("change", async (event) => {
        handleLegendaryChange(event);
        pokemonNombre = getRandomLegendary();
        if (pokemonNombre) {
          dictionary = [pokemonNombre];
          restartGame();
        }
      });
      break;

    case "tipos":
      const selectTipo = document.getElementById("select-type");
      selectTipo.addEventListener("change", async (event) => {
        pokemonNombre = await getPokemonRandomTipo(event);
        if (pokemonNombre) {
          dictionary = [pokemonNombre];
          restartGame();
        }
      });
      break;

    case "trainers":
      const selectTrainer = document.getElementById("select-trainer");
      selectTrainer.addEventListener("change", () => {
        updateTrainerGeneration();
        pokemonNombre = getRandomTrainer();
        if (pokemonNombre) {
          dictionary = [pokemonNombre];
          restartGame();
        }
      });
      break;

    default:
      console.log("No hay data-page");
  }
});

let state = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(6)
    .fill()
    .map(() => Array(dictionary[0].length).fill("")),
  currentRow: 0,
  currentCol: 0,
  keyboardState: {},
};

function drawGrid(container) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.style.gridTemplateColumns = `repeat(${state.secret.length}, auto)`;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < state.secret.length; j++) {
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
  backspaceKey.addEventListener("click", () =>
    handleVirtualKeyPress("Backspace")
  );
  specialRow.appendChild(backspaceKey);

  keyboard.appendChild(specialRow);

  container.appendChild(keyboard);
}

function handleVirtualKeyPress(key) {
  if (key === "Enter") {
    if (state.currentCol === state.secret.length) {
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
      if (state.currentCol === state.secret.length) {
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
  return state.grid[state.currentRow].join(""); // Más limpio
}

function isWordValid(word) {
  return dictionary.includes(word.toLowerCase());
}

function restartGame() {
  const secretWord = dictionary[0];
  state.secret = secretWord; // Actualizamos el estado con la palabra del diccionario
  state.grid = Array(6)
    .fill()
    .map(() => Array(secretWord.length).fill("")); // Grid basado en el tamaño de la palabra
  state.currentRow = 0;
  state.currentCol = 0;
  state.keyboardState = {};

  const game = document.getElementById("game");
  game.innerHTML = "";

  drawGrid(game); // Redibujar el grid basado en el tamaño de la palabra
  drawKeyboard(game); // Mantener el teclado
  registerKeyboardEvents(); // Registrar eventos de teclado

  console.log("Chivatazo: " + state.secret); // Para pruebas
}

function revealWord(guess) {
  const row = state.currentRow;
  const animation_duration = 500; // ms

  // Si la palabra adivinada es correcta, marcamos todas las letras como correctas
  if (state.secret === guess) {
    for (let i = 0; i < state.secret.length; i++) {
      const box = document.getElementById(`box-${row}-${i}`);
      const letter = box.textContent;

      setTimeout(() => {
        box.classList.add("right");
        state.keyboardState[letter] = "right";
        updateKeyboard();
      }, ((i + 1) * animation_duration) / 2);

      box.classList.add("animated");
      box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    // Mensaje de victoria CON BOTÓN DE VOLVER A JUGAR
    setTimeout(() => {
      displayMessage("¡Bien jugado!", "success", true);
    }, 3 * animation_duration);
    return; // Salimos de la función para evitar el resto de la lógica
  }

  // Flujo normal: evaluar cada letra individualmente
  for (let i = 0; i < state.secret.length; i++) {
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

  // Evaluar si el juego terminó
  const isGameOver = state.currentRow === 5;

  setTimeout(() => {
    if (isGameOver) {
      displayMessage(`El pokemon era: ${state.secret}`, "error");
    }
  }, 3 * animation_duration);
}

function displayMessage(message, type, showRestartButton = false) {
  const messageContainer = document.createElement("div");
  messageContainer.className = `message ${type}`;
  messageContainer.textContent = message;

  // Si el mensaje es de éxito y showRestartButton es true, agregar un botón para reiniciar
  if (showRestartButton) {
    const restartButton = document.createElement("button");
    restartButton.textContent = "Jugar de nuevo";
    restartButton.className = "restart-button";
    restartButton.addEventListener("click", () => restartGame());
    messageContainer.appendChild(restartButton);
  }

  // Añadir el mensaje al cuerpo del juego
  const gameContainer = document.getElementById("game");
  gameContainer.appendChild(messageContainer);

  // Opcional: eliminar el mensaje después de 3 segundos
  /*
  setTimeout(() => {
    gameContainer.removeChild(messageContainer);
  }, 3000);
  */
}

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
  if (state.currentCol === state.secret.length) return;
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
  if (!game) {
    // console.error("El contenedor #game no existe.");
    return;
  }
  game.innerHTML = "";

  const secretWord = dictionary[0];
  state.secret = secretWord;
  state.grid = Array(6)
    .fill()
    .map(() => Array(secretWord.length).fill(""));

  drawGrid(game); // Dibujar grid basado en la palabra inicial
  drawKeyboard(game);

  registerKeyboardEvents();

  console.log("Chivatazo: " + state.secret); // Para pruebas
}

startup();
