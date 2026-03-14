const API_KEY = "684ca942";

export async function fetchMovies(searchTerm) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`
  );
  const data = await response.json();
  return data.Search || [];
}