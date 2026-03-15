import MovieCard from "./Moviecard";

function MovieList({ movies }) {
  //for melmding som skal vises hbois det ikke finns noe filmer
  if (!movies || movies.length === 0) {
    return <p>ingen filmer funnet.</p>;
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;


// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb