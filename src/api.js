module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => console.log(response));
  }
};
