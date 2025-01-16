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
