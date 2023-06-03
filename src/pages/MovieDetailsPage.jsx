import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { fetchMovieDetails } from 'services/fetch';
import { BackLink } from 'components/BackLink';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  
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
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      <MovieDetails details={details} />
    </>
  );
};

export default MovieDetailsPage;
