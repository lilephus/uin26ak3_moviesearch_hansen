import {link} from "react-router-dom";
import Placeholder from "./assets/placeholder.png";

function MovieCard({ movie }) {

  const slug = movie.Title.toLowerCase().replace(/\s+/g, "-");


  let posterUrl = movie.Poster;
  if (posterUrl === "N/A") {
    posterUrl = Placeholder;
  }

  return (
    <div className="movie-card">
      <Link to={`/movies/${slug}`}>
        <img src={posterUrl} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;