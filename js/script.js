async function gerarPokemon(num) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const json = await response.json()
    return {
        name: json.name,
        type1: json.types[0].type.name,
        type2: json.types[1] ? json.types[1].type.name: '' ,
        sprite: json.sprites.other.showdown.front_default
        
    }
}

(async function setPokemonImg() {
    const main = document.getElementById('root')
    const pokemon = await gerarPokemon(4)
    main.innerHTML = `
        <article>
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprite}" alt="">
            <div>
                <p class="type">${pokemon.type1}</p>
                ${pokemon.type2 ? `<p class="type">${pokemon.type2}</p>`
                : ''}
            </div>
        </article>
    `

})()