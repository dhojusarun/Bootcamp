import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching popular movies:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <h1>Popular Movies</h1>
      {loading ? <p>Loading...</p> : (
        <div className="popular-movies-container">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PopularMovies;
