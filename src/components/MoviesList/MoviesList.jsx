import { Link, useLocation } from 'react-router-dom';


const MoviesList = ({ list }) => {
  const location = useLocation();
  console.log(list)
  
  return (
    <ul>
      {list?.map(el => (
        <Link key={el.id} to={`${el.id}`} state={{ from: location }}>
          <li>{el.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
