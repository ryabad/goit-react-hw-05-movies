import { getTrending } from 'common/themoviedbService';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [optionQuery, setOptionQuery] = useState('day');
  const [list, setList] = useState(null);
  const location = useLocation();

  const handleChange = e => {
    setOptionQuery(e.target.value);
  };

  useEffect(() => {
    const getPopularMovie = () => {
      getTrending(optionQuery)
        .then(response => setList(response.data.results))
        .catch(err => console.log('error', err.message));
    };
    getPopularMovie();
  }, [optionQuery]);

  return (
    <div className={css.container}>
      <label>
        Trending of the
        <select
          name="query"
          value={optionQuery}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        >
          <option key="day" value="day">
            day
          </option>
          <option key="week" value="week">
            week
          </option>
        </select>
      </label>

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
