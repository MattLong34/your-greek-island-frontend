const $ul = document.querySelector(".islandList")

fetch("http://localhost:3000/islands")
.then(response => response.json())
.then(islands => {
    const $islands = islands.map(island => {
        const $li = document.createElement('li')
        $li.innerHTML = `<a href='island.html?id=${island.id}'>${island.name}</a>`
        return $li
    })
    $islands.forEach($island => {
        $ul.append($island)
    })

})