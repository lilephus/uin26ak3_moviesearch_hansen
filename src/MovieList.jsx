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