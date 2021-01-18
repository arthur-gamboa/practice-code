
//***** Fetch All Movies *****//

// const url = "https://purple-tidal-pullover.glitch.me/movies/";
// fetch(url, options).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     })
// })

const movieObj = {
    title: "Random Movie 2",
    rating: "3.5",
    poster: "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US",
    year: "2020",
    genre: "Drama, Action, Sci-Fi",
    director: "Random Guy",
    plot: "Only one random guy, with only on random gun and one random problem. With options randomized, Randy Randomson thinks he can choose his destiny, but..it's just random.",
    actors: "Random Guy, Random Girl, Random Dude, Random Baby",
    id: 1
};

const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieObj),
};

// const url = "https://purple-tidal-pullover.glitch.me/movies";
// fetch(url, options).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     })
// })

const url = "https://purple-tidal-pullover.glitch.me/movies";
fetch(url).then(function(response) {
    response.json().then(function(data) {
        $("#movie-area").html(showMovies(data));
    })
})

function render(obj) {
    return `<div class="card">
                <h1>${obj.title}</h1>
                <img src=${obj.poster}>
            </div>`
}

function showMovies(arr) {
    let html = "";
    for(let i = 0; i < arr.length; i++) {
        html += render(arr[i]);
    }
    return html;
}

// function deleteAll(id) {
//     fetch(url+id,options).then(response => response.json().then(console.log))
// }
//     for(let i = 4; i < 67; i++) {
//         deleteAll(i);
//     }