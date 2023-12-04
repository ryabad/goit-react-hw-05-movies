import { getTrending } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [list, setList] = useState(null);
  const location = useLocation();

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
          {list.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={location}>
                {el.name ?? el.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
