import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies/:slug" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}