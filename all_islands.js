const main = document.querySelector('p')

fetch("http://localhost:3000/islands")
.then(response => response.json())
.then(islands => {
    islands.forEach(island => {
        const islandCard = document.createElement('article')
        const name = document.createElement('h2')
        const image = document.createElement('img')
        const shortDescription = document.createElement('p')
        
        name.innerHTML = `<a href='island.html?id=${island.id}' id="black-text">${island.name}</a>`
        image.src = island.image
        islandCard.className = 'all-island-cards'
        shortDescription.innerText = island.short_bio
        image.className = 'all-islands-images'
        name.className = 'all-islands-names'
        shortDescription.className = 'all-islands-description'


        islandCard.append(name, shortDescription, image)
        main.append(islandCard)
    })
})