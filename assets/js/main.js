
function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
                <span class="namePokemon">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>


                    <img class="image-pokemon"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="Bulbasaur">
                </div>
            </li>

    `
}

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons()
    .then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
    })

