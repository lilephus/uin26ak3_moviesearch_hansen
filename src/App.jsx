import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import MoviePage from "./MoviePage";
// import SearchResults from "./SearchResults";


//brukers til routing her
function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/:movie" element={<MoviePage />} />
        <Route path="/" element={<SearchResults />} />
        {/* <Route path="/movies/:slug" element={<MoviePage />} /> */}
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;