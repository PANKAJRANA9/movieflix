import { useState, useEffect } from "react";

export default function MovieRow() {
  const [movies1, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="movies-grid">
      {movies1.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`images/${movie.image}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <br></br>
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">Rating : {movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
