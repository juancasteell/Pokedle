// Funcion de referencia----------------------------------------------------------------------------
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
// -------------------------------------------------------------------------------------------------
