import { getTrending } from 'common/themoviedbService';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import css from './Home.module.css';

const Home = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getPopularMovie = () => {
      getTrending()
        .then(response => setList(response.data.results))
        .catch(err => console.log('error', err.message));
    };
    getPopularMovie();
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending Today</h1>
      {list && (
        <ul>
          <MovieList movies={list} />
        </ul>
      )}
    </div>
  );
};

export default Home;
