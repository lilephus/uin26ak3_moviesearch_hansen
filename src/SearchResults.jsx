import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { searchMovies } from "./omdbApi";

fuction SearchResults() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");