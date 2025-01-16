// Funcion de referencia----------------------------------------------------------------------------
// Funcion que genera el nombre random de un pokemon dependiendo de su tipo-------------------
async function getPokemonRandomTipo(event) {
  selectedType = parseInt(event.target.value);

  if (selectedType === 0) {
    return;
  }

  console.log("Tipo: ", selectedType);

  // Obtiene la primera generación de Pokémon del objeto 'generations'
  let tipo = types[selectedType];

  //recuperar todos los pokemon del tipo seleccionado o recuperar todos los pokemon

  //opcional--> vas mirando si el pokemon corresponde con el tipo seleccionado y sino lo hace, lo descartas

  //random de todo los pokemon del tipo seleccionado (seria del array de pokemons)

  // Realiza una solicitud fetch a la API de Pokémon con el ID aleatorio generado
  let response = await fetch(`${BASE_URL}pokemon/${randomId}`);

  // Convierte la respuesta de la API a formato JSON
  let pokemon = await response.json();

  console.log(pokemon.name);

  // Devuelve el nombre del Pokémon obtenido .name para que solo devuelva
  // el nombre y no todo (stats, ataques, etc)
  return pokemon.name;
}
// -------------------------------------------------------------------------------------------------

async function getPokemonByType(type) {
  let response = await fetch(`${BASE_URL}type/${type}`);
  let data = await response.json();
  return data.pokemon.map((p) => p.pokemon);
}

async function getRandomPokemonByType(type) {
  let pokemons = await getPokemonByType(type);
  let randomIndex = Math.floor(Math.random() * pokemons.length);
  let randomPokemon = pokemons[randomIndex];
  let response = await fetch(randomPokemon.url);
  let pokemonData = await response.json();
  return pokemonData.name;
}

document
  .getElementById("select-type")
  .addEventListener("change", async function (event) {
    let selectedType = parseInt(event.target.value);
    if (selectedType === 0) return;
    let pokemonName = await getRandomPokemonByType(selectedType);
    console.log(pokemonName);
  });
