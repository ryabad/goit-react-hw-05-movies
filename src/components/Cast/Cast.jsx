import { getMovieCredits } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const DEFAULT_IMG =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    setIsLoading(true);
    const getCastInfo = () => {
      getMovieCredits(moviesId)
        .then(response => {
          setCast(response.data.cast);
        })
        .catch(error => console.log('error', error.message))
        .finally(() => setIsLoading(false));
    };
    getCastInfo();
  }, [moviesId]);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h2>Cast: </h2>
      {cast && (
        <ol>
          {cast.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : DEFAULT_IMG
                }
                alt={'poster'}
                width={250}
              />
              <p>Name: {el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Cast;
