// components/Movie.js
import styles from '../styles.module.css';

const Movie = ({ title, poster_path, release_date, overview, }) => (
  <div className={styles.movieCard}>
    <h2>{title}</h2>
    <img
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={`${title} Poster`}
      className={styles.poster}
    />
    <p>Release Date: {release_date}</p>
    <h3>Summary:</h3>
    <p>Description: {overview}</p>
  </div>
);

export default Movie;
