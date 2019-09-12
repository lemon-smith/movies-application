// Es6 Imports
import {load, formBtn} from './hello';
import { getMovies } from './api.js';


// Global variables



// Going Down!

getMovies().then((movies) => {
  let x = [];
  movies.forEach(({title, rating, id}) => {
    x.push(`

        <h4>Movie Title: ${title}</h4>
        <p>Movie Rating: ${rating}</p>
    
    
    
    `);
  }); //forEach()
  load.innerHTML = x;
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});



formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  postMovie();
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

