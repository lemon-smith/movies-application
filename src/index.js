// Es6 Imports
import {load, formBtn} from './hello';
import { getMoviesProm } from './api.js';


// Fetch
updateMovies();
function updateMovies() {
  getMoviesProm().then(movie => {
    load.innerHTML = listOfMovies(movie);
  }).then(() => {



    let inputElements = document.querySelectorAll('button');


    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].addEventListener('click', function() {

        console.log(this.parentNode);


        this.parentNode.insertAdjacentHTML('afterend', '<button type="submit">Done</button>');


        this.parentNode.setAttribute('contenteditable', 'true');


      });
    }



  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
}


// Sub functions
function listOfMovies(movie) {
  const mov = movie.map(mov => `<li><strong>Movie:</strong> ${mov.title}<br><strong>Rating:</strong> ${mov.rating} <button type="submit" class="edit-btn">Edit</button></li>`).join("\n");
  return `<ul>${mov}</ul>`
}



// Events
formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  postMovie();
  updateMovies();
});



function postMovie() {
  let movieTitle = document.querySelector('.movieTitle').value;
  let movieRating = document.querySelector('input[name="movieRating"]:checked').value;
  let newMovie = {
    title: movieTitle,
    rating: movieRating
  };
  const url = '/api/movies';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  };
  fetch(url, options)
      .then(/* post was created successfully */)
      .catch(/* handle errors */);
}

//Edit

// document.querySelector('.edit-btn').addEventListener('click', function(e) {
//   e.preventDefault();
//
//
//   document.querySelector('li').setAttribute('contenteditable', 'true');
//
// });