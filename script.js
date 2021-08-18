const pokemon_container = document.getElementById('pokemon_container');
const pokemons_number = 151;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  card(pokemon);
}

const card = (pokemon) => {
  const { name, types, sprites, id } = pokemon;
  const type = types[0].type.name;
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');
  pokemonElement.classList.add('grow');
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">${type}</small>
  </div>`;
  pokemonElement.innerHTML = pokeInnerHTML;
  pokemon_container.appendChild(pokemonElement);
}

fetchPokemons();