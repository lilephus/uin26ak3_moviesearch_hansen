import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { searchMovies } from "./omdbApi";

function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //Når siden blir åpnet det første som kommer opp er james bond filmer
  useEffect(() => {
    searchMovies("James Bond").then((res); => setMovies(res));
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const results = await searchMovies(searchTerm);
    setMovies(results);
  }

  return (
    <main>
      <header>
        <h1>Her kan du søke filmer</h1>
      </header>

      <section className="search-bar">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Søk etter filmer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </section>
      <MovieList movies={movies} />
    </main>
  );
}

export default SearchResults;