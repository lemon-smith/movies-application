export const getMoviesProm = () => fetch('/api/movies').then(response => response.json());


