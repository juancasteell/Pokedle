const BASE_URL = "https://pokeapi.co/api/v2/";

const types = {
  1: "water",
  2: "fire",
  3: "grass",
  4: "bug",
  5: "electric",
  6: "fighting",
  7: "psychic",
  8: "normal",
  9: "poison",
  10: "ground",
  11: "rock",
  12: "ghost",
  13: "ice",
  14: "dragon",
  15: "steel",
  16: "flying",
  17: "fairy",
  18: "dark",
};

async function getPokemonRandomTipo(event) {
  selectedType = parseInt(event.target.value);

  if (selectedType === 0) {
    return;
  }

  // guardo el tipo en una variable
  let tipo = types[selectedType];

  // Realiza una solicitud fetch a la API de Pokémon con el tipo seleccionado
  let response = await fetch(`${BASE_URL}type/${tipo}`);
  let data = await response.json();

  // array con todos los pokemon del tipo seleccionado
  let pokemonArray = data.pokemon.map((p) => p.pokemon);

  // Genera un ID aleatorio dentro del array de Pokémon del tipo seleccionado
  let randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  // Realiza una solicitud fetch a la API de Pokémon con el nombre del Pokémon aleatorio
  let pokemonResponse = await fetch(randomPokemon.url);
  let pokemon = await pokemonResponse.json();

  console.log(pokemon.name);

  return pokemon.name;
}

document
  .getElementById("select-type")
  .addEventListener("change", getPokemonRandomTipo);
