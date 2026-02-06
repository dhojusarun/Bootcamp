import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../CSS/Home.css'; // Reusing Home.css for layout consistency

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
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
        if (!id) return;
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    console.error('API returned error:', data.status_message);
                    setMovie(null);
                } else {
                    setMovie(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching movie details:', err);
                setMovie(null);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="home"><p>Loading...</p></div>;
    if (!movie || movie.success === false) return <div className="home"><p>Movie not found.</p></div>;

    return (
        <div className="home" style={{ padding: '20px', color: 'white' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style={{ borderRadius: '8px', maxWidth: '300px' }}
                    />
                )}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h1 style={{ margin: '0 0 10px 0' }}>{movie.title}</h1>
                    {movie.tagline && <p style={{ fontSize: '1.2rem', color: '#999' }}>{movie.tagline}</p>}
                    <div style={{ margin: '20px 0' }}>
                        <strong>Release Date:</strong> {movie.release_date || 'N/A'}
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <strong>Rating:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
                    </div>
                    <div style={{ margin: '20px 0', lineHeight: '1.6' }}>
                        <strong>Overview:</strong>
                        <p>{movie.overview || 'No overview available.'}</p>
                    </div>
                    {movie.genres && movie.genres.length > 0 && (
                        <div style={{ margin: '20px 0' }}>
                            <strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={() => navigate(-1)}
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    background: 'var(--primary-color, #e50914)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                Back
            </button>
        </div>
    );
}

export default MovieDetails;
