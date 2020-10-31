document.addEventListener('DOMContentLoaded', () => {
  const pokemonUrl = "http://localhost:3000/pokemon/"


  const getPokemon = () => {
    fetch(pokemonUrl)
    .then(resp => resp.json())
    .then(pokeArray => renderPokemons(pokeArray))
  }
  
  const renderPokemons = (pokeArray) => {
    pokeArray.forEach(renderPokemon)
  }

  const renderPokemon = pokemon => {
    const pokeDiv = document.createElement('div')
    pokeDiv.dataset.id = pokemon.id
    const pokemonContainer = document.getElementById('pokemon-container')
    pokeDiv.innerHTML = `
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    `
    pokemonContainer.append(pokeDiv);
  }

  
  
  

getPokemon();

})

/*
### Deliverables:

<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">charizard</h1>
    <div class="pokemon-image">
      <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
    </div>
  </div>
</div>

1.  Implement a filter functionality for your Pokemon list.
1.  Implement a flip functionality on each Pokemon.
1.  Your search should include pokemon whose names are **not** exact matches
1.  AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.


*/