import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

const MoviesList = ({ list }) => {
  const location = useLocation();

  return (
    <List>
      {list?.map(el => (
        <Link key={el.id} to={`${el.id}`} state={{ from: location }}>
          <li>{el.title}</li>
        </Link>
      ))}
    </List>
  );
};

export default MoviesList;
