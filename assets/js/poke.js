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

let selectedGen = 1;
let selectedType = 1;

// Funcion que genera el nombre random de un pokemon dependiendo de su generacion-------------------
async function getPokemonRandomGeneracion(event) {
  selectedGen = parseInt(event.target.value);

  if (selectedGen === 0) {
    return;
  }

  console.log("gen: ", selectedGen);

  // Obtiene la primera generación de Pokémon del objeto 'generations'
  let gen = generations[selectedGen];

  console.log("Estoy dentro?", gen);

  // Genera un ID aleatorio dentro de la primera generación
  let randomId =
    Math.floor(Math.random() * (gen.end - gen.start + 1)) + gen.start;

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  let response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  let pokemon = await response.json();

  console.log(pokemon.name);

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}

document
  .getElementById("select-gen")
  .addEventListener("change", getPokemonRandomGeneracion);

// -----------------------------------------------------------------------

function scanerTipo() {
  selectedType = parseInt(this.value);

  switch (selectedType) {
    case 1:
      console.log(types[1]);
      break;
    case 2:
      console.log(types[2]);
      break;
    case 3:
      console.log(types[3]);
      break;
    case 4:
      console.log(types[4]);
      break;
    case 5:
      console.log(types[5]);
      break;
    case 6:
      console.log(types[6]);
      break;
    case 7:
      console.log(types[7]);
      break;
    case 8:
      console.log(types[8]);
      break;
    case 9:
      console.log(types[9]);
      break;
    case 10:
      console.log(types[10]);
      break;
    case 11:
      console.log(types[11]);
      break;
    case 12:
      console.log(types[12]);
      break;
    case 13:
      console.log(types[13]);
      break;
    case 14:
      console.log(types[14]);
      break;
    case 15:
      console.log(types[15]);
      break;
    case 16:
      console.log(types[16]);
      break;
    case 17:
      console.log(types[17]);
      break;
    case 18:
      console.log(types[18]);
      break;
    default:
      console.log(types[1]);
      break;
  }
}

// Funcion que genera el nombre random de un pokemon dependiendo de su tipo-------------------
async function getPokemonRandomTipo(event) {
  selectedType = parseInt(event.target.value);

  if (selectedType === 0) {
    return;
  }

  console.log("Tipo: ", selectedType);

  // Obtiene la primera generación de Pokémon del objeto 'generations'
  let tipo = types[selectedType];

  // Genera un ID aleatorio dentro de la primera generación
  let randomId =
    Math.floor(Math.random() * (tipo.end - tipo.start + 1)) + tipo.start;

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  let response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  let pokemon = await response.json();

  console.log(pokemon.name);

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}

document
  .getElementById("select-type")
  .addEventListener("change", getPokemonRandomTipo);
