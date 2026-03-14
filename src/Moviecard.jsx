import {link} from "react-router-dom";
//impoterer placeholderbilde for filmer uten poster
import Placeholder from "./assets/placeholder.png";

function MovieCard({ movie }) {
//lager slug av tittelen så den kan bruker i urln
  const slug = movie.Title.toLowerCase().replace(/\s+/g, "-");

//placejhlder bilder brukes her hvis det ikke er noe bilde til apiet
  let posterUrl = movie.Poster;
  if (posterUrl === "N/A") {
    posterUrl = Placeholder;
  }

  return (
    <article className="movie-card">
      <Link to={`/movies/${slug}`}>
        <img src={posterUrl} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </article>
  );
}

export default MovieCard;