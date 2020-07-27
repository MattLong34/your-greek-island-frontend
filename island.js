const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const islandName = document.querySelector(".islandName")
const islandDescription = document.querySelector(".islandDescription")
const islandImage = document.querySelector(".islandImage")

fetch(`http://localhost:3000/islands/${id}`)
    .then(response => response.json())
    .then(island => {
        console.log(island.image)
        islandName.textContent = island.name
        islandDescription.textContent = island.description
        // islandImage.innerHTML = `<a href='island.html?id=${island.id}'></a>`
        // islandImage.innerHTML = `<img class='child' src='images/${island.name}.jpg'>`
        islandImage.innerHTML = `<img class="image" src='${island.image}'>`
        // $cardImg.src = card.image
        
    })