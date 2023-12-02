import { getBySearch } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('search');

  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getBySearch(query)
      .then(response => {
        setMoviesList(response.data.results);
      })
      .catch(error => console.log('error', error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value.trim();
    setSearchParams({ search: searchValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.container}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
        />
        <button type="submit">Submit</button>
      </form>
      <div className={css.container}>
        {isLoading && <p>Loading...</p>}
        <ul>
          {moviesList &&
            moviesList.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={location}>
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
