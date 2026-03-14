const API_KEY = "684ca942";

export async function searchMovies(title) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`
  );
  const data = await res.json();
  return data.Search || [];
}
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`
  );
  const data = await response.json();
  return data.Search || [];
}