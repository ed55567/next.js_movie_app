// utils/tmdb.js
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const searchMovies = async (query) => {
  try {
    const response = await tmdb.get('/search/movie', {
      params: {
        api_key: apiKey,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
