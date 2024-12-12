// Aqui va el codigo que se encarga de conectar con la PokeApi

const BASE_URL = "https://pokeapi.co/api/v2/";

// Objeto que contiene las generaciones de Pokémon--------------------------------------------------
const generations = {
  1: { start: 1, end: 151 },
  2: { start: 152, end: 251 },
  3: { start: 252, end: 386 },
};

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
