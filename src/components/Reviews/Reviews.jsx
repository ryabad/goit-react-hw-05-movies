import { getMovieReviews } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    setIsLoading(true);
    const getReviews = () => {
      getMovieReviews(moviesId)
        .then(response => {
          setReviews(response.data.results);
        })
        .catch(error => console.log('error', error.message))
        .finally(() => setIsLoading(false));
    };
    getReviews();
  }, [moviesId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {reviews &&
        (reviews.length === 0 ? (
          <h2>We dont have any reviews for this movie.</h2>
        ) : (
          <div>
            <ul>
              {reviews.map(el => (
                <li key={el.id}>
                  <h3>Author: {el.author}</h3>
                  <p>Username: {el.author_details.username}</p>
                  <p>{el.content}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default Reviews;
