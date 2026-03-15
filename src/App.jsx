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
        <Route path="/:movie" element={<MoviePage />} />
        <Route path="/movies/:movie" element={<MoviePage />} />
        {/* <Route path="/movies/:slug" element={<MoviePage />} />  */}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;