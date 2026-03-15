import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import MoviePage from "./MoviePage";
// import SearchResults from "./SearchResults";


//brukers til routing her
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchResults />} />
        {/* <Route path="/:movie" element={<MoviePage />} /> */}
        <Route path="/movies/:movie" element={<MoviePage />} />
        {/* <Route path="/movies/:slug" element={<MoviePage />} />  */}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;




// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb