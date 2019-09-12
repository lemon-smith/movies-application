// Es6 Imports
import {load, formBtn} from './hello';
import { getMovies } from './api.js';


// Global variables



// Shits Going Down!
load.innerHTML = "Loading...";

getMovies().then((movies) => {
  let x = [];
  movies.forEach(({title, rating, id}) => {
    x.push(`${id} ${title} ${rating}`);
  }); //forEach()
  load.innerHTML = x;
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});



// button
// formBtn.addEventListener('click', function (e) {
//   e.preventDefault();
// });


// adding a movie
// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);

