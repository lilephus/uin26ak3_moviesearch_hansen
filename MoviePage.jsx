import { useParams } from "react-router-dom";

function MoviePage() {
  const { movie } = useParams();

  //denne omgjør slug tilt tittel  for å kunne lage url av tittelen og vise den på siden
  const title = movie.replace(/-/g, " ");

    return (
        <main>
            <header>
                <h1>{title}</h1>
            </header>
        </main>
    );
}
