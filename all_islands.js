const $mainIslands = document.querySelector(".island-main-cards")

fetch("http://localhost:3000/islands")
.then(response => response.json())
.then(islands => {
    islands.forEach(island => {
        const card = document.createElement('article')
        const name = document.createElement('h2')
        const image = document.createElement('img')
        name.innerHTML = `<a href='island.html?id=${island.id}'>${island.name}</a>`
        image.src = island.image
        card.className = 'islandCard'

        card.append(name, image)
        $mainIslands.append(card)
        console.log("name", card)
    })
})