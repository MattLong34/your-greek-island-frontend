const $mainIslands = document.querySelector(".island-main-cards")

fetch("http://localhost:3000/islands")
.then(response => response.json())
.then(islands => {
    islands.forEach(island => {
        
        if (island.main_page === true) {
            const card = document.createElement('article')
            const name = document.createElement('h2')
            const image = document.createElement('img')
            name.innerHTML = `<a href='island.html?id=${island.id}'>${island.name}</a>`
            // image.innerHTML = `<a href='island.html?id=${island.id}'><img src='${island.image}'></a>`
            // islandImage.innerHTML = `<img class="image" src='${island.image}'>`
            image.src = island.image
            // image.src = google.com
            card.className = 'islandCard'
            image.className = 'mainImage'
    
            card.append(image, name)
            $mainIslands.append(card)
          }

    })
})