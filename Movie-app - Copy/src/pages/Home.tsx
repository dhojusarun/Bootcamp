import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import { fetchTrendingMovies } from '../services/movieApi';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
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
      <h1>Welcome to the Movie App</h1>
      <p>Your one-stop destination for all things movies!</p>

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

export default Home;
