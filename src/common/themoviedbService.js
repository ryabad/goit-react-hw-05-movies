import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzQzZDVmYzIwZjYyMDMyMTA5NmYxYzNiMTI4ZjNkZSIsInN1YiI6IjY1NjlkMjZiYjdkMzUyMDEwYjU0MjVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kixlzSjShWL6h0MUp1Hlkm4hdcegl7qebxp6vm49PGI',
  },
};

export function getTrending() {
  return axios(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
}

export function getBySearch(query) {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const params = new URLSearchParams({
    query,
  });
  return axios(`${URL}?${params}`, options);
}

export function getMovieDetails(id) {
  return axios(`https://api.themoviedb.org/3/movie/${id}`, options);
}

export function getMovieCredits(id) {
  return axios(`https://api.themoviedb.org/3/movie/${id}/credits`, options);
}

export function getMovieReviews(id) {
  return axios(`https://api.themoviedb.org/3/movie/${id}/reviews`, options);
}
