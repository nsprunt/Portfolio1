import { pokemon } from '../data/pokemon.js'

class Pokemon {
    constructor(id, name) {
        this.id = 0,
        this.name = name
    }
}

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    //let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    caption.textContent = pokeData.name
if(pokeData.id !== 0) {
    image.src = `../images/${pokeData.id}${pokeData.name}.png`
} else {
    image.src = `../images/pokeball.png`
}

    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}

function cardBackInfo(pokeData) {
    let infoDiv = document.createElement('div')
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')
    moveOne.textContent = pokeData.moves[0].move.name
    moveTwo.textContent = pokeData.moves[1].move.name
    moveThree.textContent = pokeData.moves[2].move.name
    moveFour.textContent = pokeData.moves[3].move.name
    infoDiv.appendChild(moveOne)
    infoDiv.appendChild(moveTwo)
    infoDiv.appendChild(moveThree)
    infoDiv.appendChild(moveFour)
    return infoDiv
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = `../images/pokeball.png`
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    cardBack.appendChild(cardBackInfo(pokeData))
    return cardBack
}

function createPokeCard(pokeData) {
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'
    
    card.addEventListener( 'click', function() {
      card.classList.toggle('is-flipped');
    });

    card.appendChild(cardFront(pokeData))
    card.appendChild(cardBack(pokeData))
    scene.appendChild(card)
    mainContainer.appendChild(scene)
}

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
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
