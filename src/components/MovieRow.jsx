import { useState, useEffect } from "react";
import TrailerModal from "./TrailerModal";

function StarRating({ rating }) {
  // Convert rating out of 10 to 5 stars scale
  const stars = Math.round(rating / 2); // e.g., 8.8 => 4.4 => rounds to 4

  return (
    <div style={{ color: "orange", fontSize: "18px" }}>
      {Array(5)
        .fill(0)
        .map((_, i) => (i < stars ? "★" : "☆"))
        .join("")}
    </div>
  );
}

export default function MovieRow() {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setActiveMovie(movie)}
          >
            <img
              className=""
              src={`https://img.youtube.com/vi/${movie.trailerId}/hqdefault.jpg`}
              alt={movie.title}
            />
            <div className="movie-card-info">
              <h3 className="movie-card-title">
                {movie.title} ({movie.year}){" "}
              </h3>
              <p className="movie-card-genre">Genre : {movie.genre}</p>
              <p className="movie-card-rating">
                Rating :
                <StarRating
                  className="movie-card-rating"
                  rating={movie.rating}
                />
                {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      {activeMovie && (
        <TrailerModal
          movie={activeMovie}
          onClose={() => setActiveMovie(null)}
        />
      )}
    </>
  );
}
