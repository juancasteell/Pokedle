const BASE_URL = "https://pokeapi.co/api/v2/";

const regions = {
  1: "kanto",
  2: "johto",
  3: "hoenn",
  4: "sinnoh",
  5: "unova",
  6: "kalos",
  7: "alola",
  8: "galar",
  9: "paldea",
};

async function getPokemonRandomRegion(event) {
  console.log("estoy dentro");
  selectedRegion = parseInt(event.target.value);

  if (selectedRegion === 0) {
    return;
  }

  // guardo la region en una variable
  let region = regions[selectedRegion];

  console.log("leo la region: ", region);

  // Realiza una solicitud fetch a la API de Pokémon con la region seleccionada
  let response = await fetch(`${BASE_URL}region/${region}/`);
  let data = await response.json();

  // array con todos los pokemon de la region seleccionada
  let pokemonArray = data.pokemon.map((p) => p.pokemon);

  let randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  // Realiza una solicitud fetch a la API de Pokémon con el nombre del Pokémon aleatorio
  let pokemonResponse = await fetch(randomPokemon.url);
  let pokemon = await pokemonResponse.json();

  console.log(pokemon.name);

  return pokemon.name;
}

document
  .getElementById("select-region")
  .addEventListener("change", getPokemonRandomRegion);
