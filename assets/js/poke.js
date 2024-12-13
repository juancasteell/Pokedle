// Aqui va el codigo que se encarga de conectar con la PokeApi

const BASE_URL = "https://pokeapi.co/api/v2/";

// Objeto que contiene las generaciones de Pokémon--------------------------------------------------
const generations = {
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

switch (key) {
  case value:
    break;

  case value:
    break;

  case value:
    break;

  case value:
    break;

  case value:
    break;

  case value:
    break;

  case value:
    break;

  case value:
    break;

  default:
    break;
}

// Funcion que genera el nombre random de un pokemon------------------------------------------------
async function getPokemonRandom(gen) {
  // Obtiene la primera generación de Pokémon del objeto 'generations'
  const genSelected = generations[gen];

  // Genera un ID aleatorio dentro de la primera generación
  const randomId =
    Math.floor(Math.random() * (genSelected.end - genSelected.start + 1)) +
    genSelected.start;

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  const response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  const pokemon = await response.json();

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}

// Funcion que genera el nombre random de un pokemon------------------------------------------------
async function getPokemonRandom() {
  // Obtiene la primera generación de Pokémon del objeto 'generations'
  const gen1 = generations[1];

  // Genera un ID aleatorio dentro de la primera generación
  const randomId =
    Math.floor(Math.random() * (gen1.end - gen1.start + 1)) + gen1.start;

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  const response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  const pokemon = await response.json();

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}

getPokemonRandom().then(console.log);

// Objeto que contiene los tipos del Pokémon--------------------------------------------------
const types = {
  water: "Agua",
  fire: "Fuego",
  grass: "Planta",
  bug: "Bicho",
  electric: "Electrico",
  fighting: "Lucha",
  psychic: "Psiquico",
  normal: "Normal",
  poison: "Veneno",
  ground: "Tierra",
  rock: "Roca",
  ghost: "Fantasma",
  ice: "Hielo",
  dragon: "Dragon",
  steel: "Acero",
  flying: "Volador",
  fairy: "Hada",
  dark: "Siniestro",
};
