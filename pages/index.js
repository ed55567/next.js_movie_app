// pages/index.js
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import axios from 'axios';
import Movie from '../components/Movie';
import styles from '../styles.module.css'; // Import the CSS module

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Adjust the size as needed
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (results) => {
    const moviesWithReviews = await Promise.all(
      results.map(async (movie) => {
        const reviews = await fetchMovieReviews(movie.id);
        return { ...movie, reviews };
      })
    );
    setMovies(moviesWithReviews);
  };

  const fetchMovieReviews = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error(`Error fetching reviews for movie ${movieId}:`, error);
      return [];
    }
  };

  return (
    <div className={styles.container}>
      <h1>Movie Search App</h1>
      <Search onSearch={handleSearch} />
      <div>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
