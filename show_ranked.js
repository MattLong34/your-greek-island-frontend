
const searchParams = new URLSearchParams(window.location.search)
const category = searchParams.get("category")
    console.log(category)

const main = document.querySelector('main')

fetch('http://localhost:3000/islands')
    .then(response => response.json())
    .then(results => {
        const $islands = results
        filterByCategory(category, $islands)
    })

    function setUpIslandCards(array) {
        array.forEach(island => {
            const islandCard = document.createElement('article')
            const name = document.createElement('h2')
            const image = document.createElement('img')
            const mediumDescription = document.createElement('p')
            
            name.innerHTML = `<a href='island.html?id=${island.id}'> ${island.name}</a>`
            image.src = island.image
            islandCard.className = 'ranked-islands-cards'
            mediumDescription.innerText = island.medium_bio
            image.className = 'ranked-islands-images'
            name.className = 'ranked-islands-names'
            mediumDescription.className = 'ranked-islands-description'
            
            islandCard.append(name, mediumDescription, image)
            main.append(islandCard)
        })
    }

    function filterByCategory(category, islands) {
        if (category === "family_rank") {
            const $topRank = islands.filter(island => island.family_rank > 0)
            setUpIslandCards($topRank)
            console.log($topRank)
        } else if (category === "budget_rank") {
            const $topRank = islands.filter(island => island.budget_rank > 0)
            setUpIslandCards($topRank)
        } else if (category === "tourist_rank") {
            const $topRank = islands.filter(island => island.tourist_rank > 0)
            setUpIslandCards($topRank)
        }
    }















// const searchParams = new URLSearchParams(window.location.search)
// const category = searchParams.get("category")
//     console.log(category)

// const main = document.querySelector('main')

// fetch('http://localhost:3000/islands')
//     .then(response => response.json())
//     .then(results => {
//         const $islands = results
//         filterByCategory(category, $islands)
//     })

//     function setUpIslandCards(array) {
//         array.forEach(island => {
//             const islandCard = document.createElement('article')
//             const name = document.createElement('h2')
//             const image = document.createElement('img')
//             const shortDescription = document.createElement('p')
            
//             name.innerHTML = `<a href='island.html?id=${island.id}'> ${island.name}</a>`
//             image.src = island.image
//             islandCard.className = 'all-island-cards'
//             shortDescription.innerText = island.short_bio
//             image.className = 'all-islands-images'
//             name.className = 'all-islands-names'
//             shortDescription.className = 'all-islands-description'
            
//             islandCard.append(name, shortDescription, image)
//             main.append(islandCard)
//         })
//     }

//     function filterByCategory(category, islands) {
//         if (category === "family_rank") {
//             const $topRank = islands.filter(island => island.family_rank > 0)
//             setUpIslandCards($topRank)
//             console.log($topRank)
//         } else if (category === "budget_rank") {
//             const $topRank = islands.filter(island => island.budget_rank > 0)
//             setUpIslandCards($topRank)
//         } else if (category === "tourist_rank") {
//             const $topRank = islands.filter(island => island.tourist_rank > 0)
//             setUpIslandCards($topRank)
//         }
//     }