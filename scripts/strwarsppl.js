import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const getLastNumber = url => {
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
    return {
        name: person.name,
        home: foundWorld.name
    }
}) 



const men = people. filter(person => person.gender === "male")
const women = people. filter(person => person.gender === "female")
const other = people. filter(person => (person.gender === "n/a") ||
     (person.gender === "none") || (person.gender === "hermaphrodite"))
    
 console.log(men, women, other)

const main = document.querySelector('.container')

men.forEach(man => {
    //<div class="box"></div>
    let manDiv = document.createElement('div')
    manDiv.className = 'box'
    let name = document.createElement('p')
    let eyeColor = document.createELement('p')
    name.textContent = man.name
    eyeColor.textContent = man.eye_color
    manDiv.appendChild(name)
    manDiv.appendChild(eyeColor)

    man.appendChild(manDiv)

})

const foundPlanet = (arr, planetUrl) => {
    const foundIt = {}
    arr.find((element) => {
        console.log(element, planetURL)
        if (element.homeworld === planetUrl)
        foundIt = element
    })
}

console.log(foundPlanet(men, 'https//swapi.co/api/planets/1/'))
