import { Link, useLocation } from 'react-router-dom';


const MoviesList = ({ list }) => {
  const location = useLocation();

  return (
    <ul>
      {list?.map(el => (
        <Link key={el.id} to={`/movies/${el.id}`} state={{ from: location }}>
          <li>{el.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;


