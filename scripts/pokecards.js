import { pokemon } from '../data/pokemon.js'

class Pokemon {
    constructor(id, name) {
        this.id = 0,
        this.name = name
    }
}

const mainContainer = document.querySelector('.container')


function createPokeCard(pokeData) {
    console.log(pokeData.id)
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    caption.textContent = upperName
if(pokeData.id !== 0) {
    image.src = `../images/${pokeData.id}${upperName}.png`
} else {
    image.src = `../images/pokeball.png`
}

    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    mainContainer.appendChild(card)
}

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson.moves)
        createPokeCard(myJson)
    })
})


const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
    let newPokeName = prompt('Enter the name of your new pokemon')
    createPokeCard(new Pokemon(80,newPokeName))
});


/*
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
