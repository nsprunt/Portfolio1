import { pokemon } from '../data/pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    caption.textContent = pokeData.name
    if (pokeData.id !== 0) {
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
    infoDiv.className = 'infoDiv'
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')
    console.log(pokeData)
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

    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });

    card.appendChild(cardFront(pokeData))
    card.appendChild(cardBack(pokeData))
    scene.appendChild(card)
    mainContainer.appendChild(scene)
}

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            createPokeCard(myJson)
        })
})

class Pokemon {
    constructor(id, name) {
        this.id = 0,
            this.name = name
        this.moves = [
            {
                move: {
                    name: "smash",
                }
            },
            {
                move: {
                    name: "obliterate",
                }
            },
            {
                move: {
                    name: "implode",
                }
            },
            {
                move: {
                    name: "chop",
                }
            }

        ]
    }
}

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function () {
    let newPokeName = prompt('Enter the name of your new pokemon')
    createPokeCard(new Pokemon(80, newPokeName))
});

const poisonTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "poison")
const flyingTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "flying")
const normalTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "normal")
const fireTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "fire")
const waterTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "water")
const psychicTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "psychic")

pokeTypeButton.addEventListener('click', function() {
    card.classlist.toggle('is-poison')
})

