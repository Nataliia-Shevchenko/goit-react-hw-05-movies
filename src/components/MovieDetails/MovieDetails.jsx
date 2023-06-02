import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Poster, MovieInfo, AddInfo } from './MovieDetails.styled';

const MovieDetails = ({ details }) => {
  const { title, overview, genres, poster_path, vote_average, release_date } =
    details;
  const posterImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const defaultImg =
    'https://cdn-icons-png.flaticon.com/512/758/758732.png?w=740&t=st=1685548023~exp=1685548623~hmac=5a38f26a8fb5051fdd8b73bf82dd2cf5ba04af6209eae24587bc748010483bce';
  const year = `${release_date}`.slice(0, 4);
  const score = Math.round(Number(vote_average) * 10);
  return (
    <><MovieInfo>
     
      <Poster  src={poster_path ? posterImg : defaultImg} alt={title} />
      <div>
        <h3>
          {title} ({year})
        </h3>
        <p>User score: {score}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Genres:</h5>
        <p>
          {genres?.map(el => (
            <span key={el.id}> {el.name}</span>
          ))}
        </p>
      </div>
      </MovieInfo>
      <AddInfo>
      <h4>Additional information</h4>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AddInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    
    </>
  );
};

export default MovieDetails;
