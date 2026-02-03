import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import PopularMovies from "./pages/PopularMovies";
import TrendingMovies from "./pages/TrendingMovies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          {/* Movie available pages */}
          <Route path="/" element={<Home />} />
          <Route
            path="/trendingmovies"
            element={
              <ProtectedRoute>
                <TrendingMovies />
              </ProtectedRoute>
            }
          />
          <Route path="/popularmovies" element={<PopularMovies />} />
          <Route path="/newmovies" element={<NewMovies />} />

          {/* login and signup pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;