import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { searchMovies } from "./omdbApi";

function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //Når siden blir åpnet det første som kommer opp er james bond filmer
  useEffect(() => {
    searchMovies("james bond").then((res) => setMovies(res));
  }, []);

  // async function handlea


  async function handleSearch(e) {
    e.preventDefault();
    //for åt det trengs minst 3 tegn for å søke
    if (searchTerm.trim().length < 3) return;
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




// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb