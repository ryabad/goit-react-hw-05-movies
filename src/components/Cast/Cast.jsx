import { getMovieCredits } from 'common/themoviedbService';
import { CastList } from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
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
          <CastList cast={cast} />
        </ol>
      )}
    </div>
  );
};

export default Cast;
