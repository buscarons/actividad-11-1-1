function getCharacters(done) {
    const result = fetch("https://rickandmortyapi.com/api/character")

    result
        .then(response => response.json())
        .then(data => done(data))
}

getCharacters(data => {
    data.results.forEach(element => {
        const article = document.createRange().createContextualFragment(`
        <div class="card">
                <img src="${element.image}" alt="character">

                <h2>${element.name}</h2>
                <span><b>Status:</b> ${element.status}</span>
        </div>`)

        document.querySelector(".container").append(article);
    });
});