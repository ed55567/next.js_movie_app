// components/Search.js
import { useState } from 'react';
import { searchMovies } from '../utils/tmdb';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    onSearch(movies);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
