import { getMovieDetails } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MoviesDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { moviesId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const DEFAULT_IMG =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    setIsLoading(true);
    const getDetails = () => {
      getMovieDetails(moviesId)
        .then(response => {
          setDetails(response.data);
        })
        .catch(error => console.log('error', error.message))
        .finally(() => setIsLoading(false));
    };
    getDetails();
  }, [moviesId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {details && (
        <div className={css.container}>
          <Link to={location.state}>Go back</Link>
          <img
            style={{
              display: 'flex',
              marginTop: '20px',
            }}
            src={
              details.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`
                : DEFAULT_IMG
            }
            alt={'poster'}
            width={250}
          />
          <h2>Title: {details.title}</h2>
          <p>Overview: {details.overview}</p>
          <p>Users rating: {details.vote_average}</p>
          {details.genres && (
            <ul>
              {details.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          )}
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Read about cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
