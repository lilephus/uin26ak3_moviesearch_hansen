import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviePage() {
  const { movie } = useParams();
  const title = movie.replace(/-/g, " ");

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=684ca942&t=${title}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [title]);

  if (!movieData) {
    return <p>Loading...</p>;
  }

  //denne omgjør slug tilt tittel  for å kunne lage url av tittelen og vise den på siden
//   const title = movie.replace(/-/g, " ");
// const title = movie.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <main>
            <header>
                <h1>{title}</h1>
            </header>

            <img src={movieData.Poster} alt={movieData.Title} />
            <p><strong>Released:</strong> {movieData.Released}</p>
            <p><strong>Genre:</strong> {movieData.Genre}</p>
            <p><strong>Runtime:</strong> {movieData.Runtime}</p>
            <p><strong>Director:</strong> {movieData.Director}</p>
            <p><strong>Actors:</strong> {movieData.Actors}</p>
            <p><strong>Plot:</strong> {movieData.Plot}</p>
            <p><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
        <p>{movieData.Plot}</p>
        
        </main>
    );
}

export default MoviePage;
