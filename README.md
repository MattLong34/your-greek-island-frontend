# Your Greek Island
> Your new favorite way to browse the Greek islands!

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Your Greek Island is a full-stack application that allows the user explore the Greek islands! A user can view all islands on one page, view islands by category, and view detailed individual island pages that also display that islands current weather.

Dive in and find the perfect Greek island for you!

## Intro Video
[Your Greek Island on YouTube](https://youtu.be/VAVgHlKsICs)

## Technologies
* Ruby - version 2.6.1
* ActiveRecord - version 6.0
* Rails API version 6.0.3
* Sinatra - version 2.0
* Sinatra-activerecord - version 2.0
* SQLite3 - version 1.4
* JSON - version 2.3
* Rest-Client - version 2.1
* HTML5
* CSS
* JavaScript
* Bootstrap 4

## Setup
To have full access to all the features in this application: 
1. Open an account with https://openweathermap.org/api (it is free)
1. Clone both the frontend (https://github.com/MattLong34/your-greek-island-frontend) and the backend (https://github.com/MattLong34/your-greek-island-backend) GitHub repositories locally to your computer
1. In the command line, navigate to the root directory of this repository, and enter the following: 
  $ bundle install 
  $ touch config.js 
1. Navigate to the .config folder, and paste in the following: 
        ```var config = {
            API_KEY : 'your api key'
        }```
1. In the command of the backend directory, run: 
  $ rails db:migrate
  $ rails db:seed
1. Now save all files, on Windows: (start + alt + s), on Macs: (command + alt +s)
1. In the command of the backend directory, run:
    $ rails s 
    $ this will start your backend server
1. Now in the command of the frontend directory, run:
    $ lite-server
    $ this should automatically open a new broswer with the web application on it.

## Code Examples
```javaScript
const api_key_1 = config.API_KEY

fetch(`http://localhost:3000/islands/${id}`)
    .then(response => response.json())
    .then(island => {
    
        const currentIsland = island.weather_id
       
        islandImage.innerHTML = `<img class="image" src='${island.image}'>`
        islandName.textContent = island.name
        islandLongBio.innerText = island.long_bio
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${currentIsland}&appid=${api_key_1}`)
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
```

```javascript
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
```

## Features
* View 20 spectacular Greek islands
* Easily navigate through the application with intuitive links
* Browse islands by most popular 
* Filter islands to view the top five in listed categories (popularity, family-friendly, budget-freindly)
* View an island's current weather
* Click on the Travel Warning for up-to-date COVID-19 travel restrictions

## Status
Project is: finished with option to expand functionality and refactor code.

## Inspiration
The inspiration for Your Greek Island came from our direct experience with and appreciation of the beauty and exploration of the Greek island's. We wanted to design a tool that would aid someone who wants to visit the islands but is not sure which one to go to. We set out to build an application that would not only be practical, but also give the user a pleasan UI and UX experience that heightens their desire to visit this beautiful corner of the world! 

We hope that you find browsing Your Greek Islands to be as helpful and enjoyable as we do!

## Contact
Created by [Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) and [Matt Long](https://www.linkedin.com/in/mattlong34/)

Feel free to contact us! 

## License
[Click to view]()