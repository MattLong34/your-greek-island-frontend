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
                image.src = island.image
                card.className = 'islandCard'
                image.className = 'mainImage'
    
                card.append(image, name)
                $mainIslands.append(card)
            }
        })
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop()
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent')
    } else{
        $('.fixed-top').css('background', 'rgba(25, 100, 250, 0.9)')
    }
})