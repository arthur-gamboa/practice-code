const allURL = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=`;
const posterURL = "https://image.tmdb.org/t/p/w400";
const url = "https://purple-tidal-pullover.glitch.me/movies";


// ===================== Log All Movies =====================//
fetch(url).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
})

//===================== Edit Movie =====================//
const editMovie = (id) => fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieObj),

}).then(response => response.json()
).then(() => {
    render();
}).catch(error => console.log(error));


//===================== Delete Movie =====================//
const deleteMovie = (id) => fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json()
).then(() => {
    render();
}).catch(error => console.log(error));


// // ===================== Delete Multiple Movies =====================//
// function deleteAll(id) {
//     fetch(url+id,options).then(response => response.json().then(console.log))
// }
// for(let i = 10; i < 67; i++) {
//     deleteAll(i);
// }


const movieObj = {
    title: "Random Movie",
    rating: "4.5",
    poster: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/zootopia-oscarparody-poster2.jpg",
    year: "2021",
    genre: "Drama, Action, Sci-Fi",
    director: "Random",
    plot: "Only one random person, with only on random gun and one random problem.",
    actors: "Random, Random, Random, Random Baby",
    id: 1
};

// const options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movieObj),
// };
//
// const url = "https://purple-tidal-pullover.glitch.me/movies/1";
// fetch(url, options).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     })
// })
//
// const url = "https://purple-tidal-pullover.glitch.me/movies";
// fetch(url).then(function(response) {
//     response.json().then(function(data) {
//         $("#movie-area").html(showMovies(data));
//     })
// })

// function render(obj) {
//     return `<div class="card">
//                 <h1>${obj.title}</h1>
//                 <img src=${obj.poster}>
//             </div>`
// }

function render(obj) {
    return '<div class="card" style="width: 12rem;"> <div class="card-body"></div>' +
        '<h6 class="card-title" id="current-date">' + `<h1>${obj.title}</h1>` + '</h6>' +

        '<h5 class="card-text" id="location">' + '<h5>' + obj.rating + ", " + obj.plot + "</h5>" +

        `<img src=${allURL+posterURL}`
}

function showMovies(arr) {
    let html = "";
    for(let i = 0; i < arr.length; i++) {
        html += render(arr[i]);
    }
    return html;
}
