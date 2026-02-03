import { useEffect, useState } from "react";
import "../CSS/Home.css";
import { fetchUpcomingMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";

function NewMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchUpcomingMovies();
        setMovies(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="home">
      <h1>New Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <div className="error-message">
          <p>⚠️ {error}</p>
          <p>Please check your TMDB API key in <code>src/services/movieApi.ts</code>.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewMovies;
