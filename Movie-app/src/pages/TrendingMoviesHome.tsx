import { useEffect, useRef, useState } from "react";
import "../CSS/TrendingMovies.css";
import { NavLink } from "react-router-dom";

function TrendingMoviesHome() {
  const [movies, setMovies] = useState([]);
  const carouselRef = useRef(null);

  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODIyMzQxOWJmODFmYzYyMzc1MDgyMmI3Y2M4NDI1ZCIsIm5iZiI6MTc3MDAxNDMwMy40OTMsInN1YiI6IjY5ODA0NjVmZTc2YzA2OTk5MWJlNWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTMc8_A_-VPKW6qp-3Ena63ZZUXOq75eRCNIhejf9Jk";

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day", {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 15)));
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className="trending-home-section">
      <div className="trending-home-header">
        <h1>
          <NavLink to="/trendingmovies">Trending Movies</NavLink>
        </h1>
      </div>

      <div className="trending-home-carousel" ref={carouselRef}>
        <div className="trending-home-track">
          {movies.map((movie) => (
            <div className="trending-home-card" key={movie.id}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingMoviesHome;
