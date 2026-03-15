import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { searchMovies } from "./omdbApi";

function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //Når siden blir åpnet det første som kommer opp er james bond filmer
  useEffect(() => {
    searchMovies("James Bond").then((res); => setMovies(res));
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const results = await searchMovies(searchTerm);
    setMovies(results);
  }

  return (
    <main>
      <header>
        <h1>Her kan du søke filmer</h1>
        <form onSubmit={handleSearch}>
    </main>