import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return movies.map(el => (
    <li key={el.id}>
      <Link to={`/movies/${el.id}`} state={location}>
        {el.name ?? el.title}
      </Link>
    </li>
  ));
};
