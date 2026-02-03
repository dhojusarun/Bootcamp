const API_KEY = '8cbc832f28686e0821d3f94ecb02927c'; // PLEASE REPLACE WITH YOUR VALID TMDB API KEY
const BASE_URL = 'https://api.themoviedb.org/3';

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || 'Failed to fetch movies');
    }
    const data = await response.json();
    return data.results || [];
};

export const fetchTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return handleResponse(response);
};

export const fetchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return handleResponse(response);
};

export const fetchUpcomingMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    return handleResponse(response);
};

export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return handleResponse(response);
};
