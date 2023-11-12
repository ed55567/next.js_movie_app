// components/Movie.js
import styles from '/styles.module.css';

const Movie = ({ title, poster_path, release_date, overview, }) => (
<div className={styles.movieCardContainer}>
    <div className={styles.movieCard}> 
        {/* <h2 className={styles.movieTitle}>{title}</h2> */}
        <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title} Poster`}
        className={styles.poster}
        />
        {/* <p className={styles.movieReleaseDate}>Release Date: {release_date}</p>
        <h3 className={styles.movieSummaryTitle}>Summary:</h3>
        <p className={styles.movieDescription}>Description: {overview}</p> */}
    </div>
</div>
);

export default Movie;
