/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

import { p } from './hello';

/**
 * require style imports
 */
const {getMovies} = require('./api.js');



getMovies().then((movies) => {

  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
