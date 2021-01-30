export async function fetchPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  return response.json()
}

export async function fetchPokemon(url) {
  const response = await fetch(url)
  return response.json()
}
