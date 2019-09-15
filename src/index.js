// Es6 Imports
import {load, formBtn} from './hello';
import { getMoviesProm } from './api.js';


// Fetch
updateMovies();
function updateMovies() {
  getMoviesProm().then(movie => {
    // console.log(movie);
    load.innerHTML = listOfMovies(movie);
    editButton();
    doneButton();
    deleteButton();
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
}


// Sub functions
function listOfMovies(movie) {
  const mov = movie.map(mov => `<li><strong>Movie:</strong> <span class="movie-title editable">${mov.title}</span><br><strong>Rating:</strong> <span class="movie-rating editable">${mov.rating}</span><br><strong>ID:</strong> <span class="movie-id">${mov.id}</span> <button type="submit" class="edit-btn">Edit</button> <button type="submit" class="done-btn">Done</button><button type="submit" class="delete-btn">Delete</button></li>`).join("\n");
  return `<ul>${mov}</ul>`
}

// NEW EDIT BUTTON

function editButton() {
  $('.edit-btn').click(function() {
    $(this).parent().children('span').attr('contenteditable', 'true');
    $('.done-btn').css('display', 'inline-block');
  })
}

//OLD EDIT BUTTON

// function editButton() {
//   let inputElements = document.querySelectorAll('.edit-btn');
//   for (let i = 0; i < inputElements.length; i++) {
//     inputElements[i].addEventListener('click', function() {
//       // this.setAttribute('contenteditable', 'true');
//       // this.nextElementSibling.style.display = 'inline-block';
//       console.log(this.next);
//       $('.editable').css('contenteditable', 'true');
//     });
//   }
// }

function doneButton() {
  $('.done-btn').click(function() {
    let movieTitle = $(this).parent().children('.movie-title').text();

    let movieRating = $(this).parent().children('.movie-rating').text();
    let movieId = $(this).parent().children('.movie-id').text();
    const newMovie = {
      title: movieTitle,
      rating: movieRating,
      id: movieId
    };


    const url = `/api/movies/${movieId}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */);
  })
}


function deleteButton() {
  $('.delete-btn').click(function() {
    let movieId = $(this).parent().children('.movie-id').text();

    const url = `/api/movies/${movieId}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(url, options)
        .then()
        .catch(/* handle errors */);
  })

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
    rating: movieRating,

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
