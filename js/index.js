const url = "https://api.tvmaze.com/shows";
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

async function getShows() {

    try {
        
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < 12; i++) {
            container.innerHTML += `<a href="details.html?id=${results[i].id}&name=${results[i].name}"><div class="item">
            <img src="${results[i].image.medium}" alt="image from ${results[i].name}"/>
            <h2>${results[i].name}</h2>
            <h3>${results[i].genres}</h3></div></a>`
            
        } 
    }
    
    catch (error) {
        container.innerHTML += `<div class="error">Unfortunately we're not able to load this content right now. Please come back later.</div>`
        console.log("error", error);  
    }
}

setTimeout(() => {
    loader.classList.remove("loader");
    getShows();
}, 1000);

