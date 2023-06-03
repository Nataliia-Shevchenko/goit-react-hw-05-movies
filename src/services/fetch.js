const BASE_URL = `https://api.themoviedb.org/`;
// const KEY = '499c9b17ec4dc1194fa3fa31966ff450';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTljOWIxN2VjNGRjMTE5NGZhM2ZhMzE5NjZmZjQ1MCIsInN1YiI6IjY0NmNkZDJjNzA2YjlmMDBmZTU0MmYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._EPljdPLGA2vemLx2WJWdxYEBVsaBhAo9KW81IlKbcM',
  },
};

export async function fetchTrendMovies() {
  try {
    const data = await fetch(
      `${BASE_URL}3/trending/movie/day?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieByTitle(name) {
  try {
    const data = await fetch(
      `${BASE_URL}3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const data = await fetch(
      `${BASE_URL}3/movie/${id}?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchCast(id) {
  try {
    const data = await fetch(
      `${BASE_URL}3/movie/${id}/credits?language=en-US`,
      options
    );
    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchReviews(id){
  try{
    const data = await fetch(`${BASE_URL}3/movie/${id}/reviews?language=en-US&page=1`,
    options)
    return await data.json();

  }catch(error){
    console.log(error.message)
  }
}
