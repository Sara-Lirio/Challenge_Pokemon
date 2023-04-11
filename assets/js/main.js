const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml (pokemon){
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

const pokemonListAll = document.getElementById('pokemonList') 


fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for(let i=0; i < pokemonList.length; i++){
            const pokemon = pokemonList[i];
            pokemonListAll.innerHTML += convertPokemonToHtml(pokemon)
            convertPokemonToHtml(pokemon)
        }
    })
    .catch((error) => console.log(error))
