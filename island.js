const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const islandName = document.querySelector(".islandName")
const islandLongBio = document.querySelector(".islandLongBio")
const islandImage = document.querySelector(".islandImage")

fetch(`http://localhost:3000/islands/${id}`)
    .then(response => response.json())
    .then(island => {
        islandName.textContent = island.name
        islandLongBio.textContent = island.long_bio
        // islandImage.innerHTML = `<a href='island.html?id=${island.id}'></a>`
        // islandImage.innerHTML = `<img class='child' src='images/${island.name}.jpg'>`
        islandImage.innerHTML = `<img class="image" src='${island.image}'>`
        // $cardImg.src = card.image
        
    })