import { Link } from "react-router-dom";
//impoterer placeholderbilde for filmer uten poster
import Placeholder from "./assets/Placeholder.png";

function MovieCard({ movie }) {
//lager slug av tittelen så den kan bruker i urln
  const slug = movie.Title.toLowerCase().replace(/\s+/g, "-");
  // const slug = movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");


//placejhlder bilder brukes her hvis det ikke er noe bilde til apiet
  let poster = movie.Poster;
  if (poster === "N/A") {
    poster = Placeholder;
  }

  return (
    <article className="movie-card">
      <Link to={`/movies/${slug}`}>
        <img src={poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </article>
  );
}

export default MovieCard;




// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb