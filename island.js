const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const islandName = document.querySelector(".islandName")
const islandLongBio = document.querySelector(".islandLongBio")
const islandImage = document.querySelector(".islandImage")
const myApiKey = "74bffa10863bcfe0f5c7501bce2b4a08"

fetch(`http://localhost:3000/islands/${id}`)
    .then(response => response.json())
    .then(island => {
    
        const currentIsland = island.weather_id
       
        islandImage.innerHTML = `<img class="image" src='${island.image}'>`
        islandName.textContent = island.name
        islandLongBio.innerText = island.long_bio
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${currentIsland}&appid=74bffa10863bcfe0f5c7501bce2b4a08`)
        .then(response => response.json())
        .then(results => {
    
            const currentTemp = results.main.temp
            const temp = document.querySelector('.forecast')
            
            temp.innerHTML = `Current temperature is <span id="tempcolor"> ${temperatureConverter(currentTemp)} &#8457</span>`
        })
    })

function temperatureConverter (temp) {
    let fTemp = temp * 9/5 - 459.67
    return fTemp.toFixed(0)
}
    //     islandImage.innerHTML = `<img class="image" src='${island.image}'>`
        
    // })

