import { pokemon } from '../data/pokemon.js'

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        //createPokeCard(myJson)
    })
})

/*function matchIdToImage(aPokemon) {
    if (aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if(aPokemon.id > 9 && aPokemon.id < 100 ) {
        aPokemon.imageID = aPokemon.id
    }
    aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.slice(1)
    return aPokemon
}*/

console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokedata) {
    let card = document.createElement('div')
    let name = document.createElement('p')
    let image = document.createElement('img')

    name.textContent = pokedata.name
    image.src = pokedata.sprites.front_default
    card.appendChild(name)
    card.appendChild(image)
    mainContainer.appendChild(card)
}
/*class Pokemon {
    constructor(id, name) {
        this.id = id,
        this.name = name
    }
}

let newPokemon = new Pokemon(80, 'Thoremon')

console.log(newPokemon)

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
        return response.json ()
    })
.then(function(myJson) {
    console.log(myJson);
    createPokeCard(myJson)
    })
});

console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokedata) {
    let card = document.createElement('div')
    let figure = document.createElement('figure')
    //card.className = 'box'
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    name.textContent = pokedata.namecard.appendChild(name)
    image.src = pokedata.sprites.front_default
    card.appendChild(name)
    card.appendChild(image)
    mainContainer.appendChild(card)
}

createPokeCard(newPokemon) */

