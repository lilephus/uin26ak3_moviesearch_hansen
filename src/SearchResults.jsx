import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { searchMovies } from "./omdbApi";

function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //Når siden blir åpnet det første som kommer opp er james bond filmer
  useEffect(() => {
    searchMovies("James Bond").then(setMovies);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    searchMovies(searchTerm).then(setMovies);
  }