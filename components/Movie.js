// components/Movie.js
import styles from '/styles.module.css';


const Movie = ({ title, poster_path, release_date, overview, }) => (
     <div className={styles.movieCardOverlay}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <p className={styles.movieReleaseDate}>Release Date: {release_date}</p>
        <h3 className={styles.movieSummaryTitle}>Summary:</h3>
        <p className={styles.movieDescription}>Description: {overview}</p>
     <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title} Poster`}
        className={styles.poster}
        />
    </div>
    
);



export default Movie;
