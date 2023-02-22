const container = document.querySelector(".details_container");
const loader = document.querySelector(".loader");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.tvmaze.com/shows/" + id;

async function fetchSerie() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        createHtml(details);
      
    }
    catch(error) {
        container.innerHTML += `<div class="error">Unfortunately we're not able to load this content right now. Please come back later.</div>`
        console.log("error", error); 
    }
    
}

function createHtml(details) {
    container.innerHTML += `<div">
    <img src="${details.image.medium}" alt="${details.name}" id="details_img"/>
    </div>
    <div>
    <h2>${details.name}</h2>
    <h3>${details.genres}</h3>
    <h4 class="released">${details.premiered}</h4>
    <p>${details.summary}</p>
</div>`;
}

setTimeout(() => {
    loader.classList.remove("loader");
    fetchSerie();
}, 1000);