/* export {
  BASE_URL,
  firstTimeExecuting,
  generations,
  getPokemonRandomGeneracion,
  selectedGen,
}; */

export const BASE_URL = "https://pokeapi.co/api/v2/";

// Objeto que contiene las generaciones de Pokémon--------------------------------------------------
export const generations = {
  1: { start: 1, end: 151 },
  2: { start: 152, end: 251 },
  3: { start: 252, end: 386 },
  4: { start: 387, end: 493 },
  5: { start: 494, end: 649 },
  6: { start: 650, end: 721 },
  7: { start: 722, end: 809 },
  8: { start: 810, end: 905 },
  9: { start: 906, end: 1008 },
};

export let selectedGen = 1;
export let firstTimeExecuting = true; //semaphore variable

// Funcion que genera el nombre random de un pokemon dependiendo de su generacion-------------------
export async function getPokemonRandomGeneracion(event) {
  //Prevent first time excution problem
  if (!firstTimeExecuting) {
    selectedGen = parseInt(event.target.value);
  }
  firstTimeExecuting = false;
  console.log(selectedGen);

  // if (selectedGen === 0) {
  //   return;
  // }

  console.log("gen: ", selectedGen);

  // Obtiene la primera generación de Pokémon del objeto 'generations'
  let gen = generations[selectedGen];

  // Genera un ID aleatorio dentro de la primera generación
  let randomId =
    Math.floor(Math.random() * (gen.end - gen.start + 1)) + gen.start;

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  let response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  let pokemon = await response.json();

  // Obtén los tipos del Pokémon desde la respuesta
  let types = pokemon.types.map((type) => type.type.name).join(", ");

  const pistaElement = document.getElementById("pista");
  if (pistaElement) {
    pistaElement.textContent = `Tipo: ${types}`;
  }

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}

/* document
  .getElementById("select-gen")
  .addEventListener("change", getPokemonRandomGeneracion); */
