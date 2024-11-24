async function gerarPokemon(num) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const json = await response.json()
    return {
        name: json.name,
        type1: json.types[0].type.name,
        type2: json.types[1].type.name,
        sprite: json.sprites.other.showdown.front_default
        
    }
}

async function setPokemonImg() {
    const main = document.getElementById('root')
    const pokemon = await gerarPokemon(1)
    main.innerHTML = `
        <article>
            <h2 id="title">${pokemon.name}</h2>
            <img id="card" src="${pokemon.sprite}" alt="">
        </article>
    `

}

setPokemonImg()