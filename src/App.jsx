import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";


function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/:movie" element={<MoviePage />} />
        {/* <Route path="/movies/:slug" element={<MoviePage />} /> */}
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;