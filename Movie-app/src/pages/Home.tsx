import NewMovies from "./NewMovies";
import PopularMovies from "./PopularMovies";
import TrendingMovies from "./TrendingMovies";
import '../CSS/Home.css';

function Home() {
  return (
    <div className="home">
      <h2><TrendingMovies/></h2>
      <h2><PopularMovies/></h2>
      <h2><NewMovies/></h2>
    </div>
  );
}

export default Home;
