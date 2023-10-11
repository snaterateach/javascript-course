// Función para obtener la lista de Pokémon
async function fetchPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de Pokémon");
  }
  const data = await response.json();
  console.log(data);
  return data.results;
 
}

// Función para obtener los detalles de un Pokémon
async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("No se pudo obtener la información del Pokémon");
  }
  return response.json();
}

// Función para renderizar una tarjeta de Pokémon
function renderPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");
  card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p>Altura: ${pokemon.height} dm</p>
    <p>Peso: ${pokemon.weight} hg</p>
    <button>Botón</button>
  `;
  return card;
}

// Función para obtener y mostrar los Pokémon
async function getPokemonData() {
  try {
    const pokemonList = await fetchPokemonList();
    const pokemonDetailsPromises = pokemonList.map((pokemon) =>
      fetchPokemonDetails(pokemon.url)
    );
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    // Renderiza las tarjetas de Pokémon
    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonDetails.forEach((pokemon) => {
      const card = renderPokemonCard(pokemon);
      pokemonContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llama a la función para obtener datos y mostrar las tarjetas
getPokemonData();
