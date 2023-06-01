import { useLocation, useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { fetchMovieDetails } from 'components/services/fetch';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [details, setDetails] = useState('');

  useEffect(() => {
    async function fetch() {
      try {
        const results = await fetchMovieDetails(Number(movieId));
        const {
          title,
          overview,
          genres,
          poster_path,
          vote_average,
          release_date,
        } = results;
        const filteredResults = {
          title,
          overview,
          genres,
          poster_path,
          vote_average,
          release_date,
        };

        setDetails(filteredResults);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>&#8678;Go back</Link>
      <MovieDetails details={details} />
    </>
  );
};

export default MovieDetailsPage;
