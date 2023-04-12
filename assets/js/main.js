const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {  
    pokeAPI.getPokemons(offset, limit)
        .then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.type}">
                <span class="namePokemon">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>
        
                        <div class="detail">
                            <ol class="types">
                               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
        
                            <img class="image-pokemon"
                                src="${pokemon.photo}"
                                alt="${pokemon.name}">
                        </div>
                    </li>
            `).join('')
            pokemonList.innerHTML += newHtml
        })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

