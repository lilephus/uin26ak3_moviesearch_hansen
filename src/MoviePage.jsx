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

            {movieData.Poster !== "N/A" && (
                <img src={movieData.Poster} alt={movieData.Title} />
            )}

            {/* <img src={movieData.Poster} alt={movieData.Title} || "NA" /> */}
            <p><strong>Released:</strong> {movieData.Released || "NA"}</p>
            <p><strong>Genre:</strong> {movieData.Genre || "NA"}</p>
            <p><strong>Runtime:</strong> {movieData.Runtime || "NA"}</p>
            <p><strong>Director:</strong> {movieData.Director || "NA"}</p>
            <p><strong>Actors:</strong> {movieData.Actors || "NA"}</p>
            {/* <p><strong>Plot:</strong> {movieData.Plot || "NA"}</p> */}
            <p><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
        <p>{movieData.Plot || "No description available."}</p>

        </main>
    );
}

export default MoviePage;



// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb