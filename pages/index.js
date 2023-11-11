// pages/index.js
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import axios from 'axios';
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieCard}>
            <h2>{movie.title}</h2>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className={styles.poster}
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Ratings: {movie.vote_average}</p>
            <p>Description: {movie.overview}</p>
            {movie.reviews && movie.reviews.length > 0 && (
              <div>
                <h3>Reviews:</h3>
                <ul>
                  {movie.reviews.map((review) => (
                    <li key={review.id}>
                      <p>{review.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
