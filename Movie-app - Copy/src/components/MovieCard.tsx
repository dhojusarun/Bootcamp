import React from 'react';
import './MovieCard.css';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="meta">
                    <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
                    <span className="year">{movie.release_date?.split('-')[0]}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
