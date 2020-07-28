
const searchParams = new URLSearchParams(window.location.search)
const category = searchParams.get("family_rank")
console.log(typeof category)


const main = document.querySelector('main')

fetch('http://localhost:3000/islands')
.then(response => response.json())
.then(islands => {
    
        // const topRank = islands.filter(island => island.family_rank > 0)
        const topRank = islands.filter(island => `${island.category}` > 0)
       console.log(topRank)
        
        
        topRank.forEach(island => {
        const islandCard = document.createElement('article')
        const name = document.createElement('h2')
        const image = document.createElement('img')
        const shortDescription = document.createElement('p')
        
        name.innerHTML = `<a href='island.html?id=${island.id}'>+ ${island.name}</a>`
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
    //     {
    //     islands.find(island => island)
    // })