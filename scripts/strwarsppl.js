import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

 const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
} 

const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        eye_color: person.eye_color,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
    }
}) 
console.log(allHomeWorlds)

    const mainContainer = document.createElement('div')
    mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let planetElement = document.createElement('p')
    let imageElement = document.createElement('img')

    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = person.home
    imageElement.src = person.imagePath    

    personElement.appendChild(planetElement)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
}) 

document.body.appendChild(mainContainer)
/*

const men = people.filter(person => person.gender === "male")
const women = people.filter(person => person.gender === "female")
const other = people.filter(person => (person.gender === "n/a") ||
     (person.gender === "none") || (person.gender === "hermaphrodite"))
    
 console.log(men, women, other)

    const main = document.querySelector('.container')

men.forEach(man => {
    let manDiv = document.createElement('div')
    manDiv.className = 'box'
    let name = document.createElement('p')
    let eyeColor = document.createElement('p')
    name.textContent = man.name
    eyeColor.textContent = man.eye_color
    manDiv.appendChild(name)
    manDiv.appendChild(eyeColor)
    main.appendChild(manDiv)
}) 

women.forEach(man => {
    let manDiv = document.createElement('div')
    manDiv.className = 'box'
    let name = document.createElement('p')
    let eyeColor = document.createElement('p')
    name.textContent = man.name
    eyeColor.textContent = man.eye_color
    manDiv.appendChild(name)
    manDiv.appendChild(eyeColor)
    main.appendChild(manDiv)
})

other.forEach(man => {
    let manDiv = document.createElement('div')
    manDiv.className = 'box'
    let name = document.createElement('p')
    let eyeColor = document.createElement('p')
    name.textContent = man.name
    eyeColor.textContent = man.eye_color
    manDiv.appendChild(name)
    manDiv.appendChild(eyeColor)
    main.appendChild(manDiv)
})

document.appendChild(mainContainer)


  /*  const foundPlanet = (arr, planetUrl) => {
    const foundIt = {}
    arr.find((element) => {
        console.log(element, planetURL)
        if (element.homeworld === planetUrl) 
        foundIt = element
        return element
    })
}

console.log(foundPlanet(men, 'https//swapi.co/api/planets/1/')) */
