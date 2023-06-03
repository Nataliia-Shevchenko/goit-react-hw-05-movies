import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'components/services/fetch';
import { BackLink } from 'components/BackLink';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  
  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
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
      } finally{
        setLoading(false);
      }
    }

    fetch();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {loading && <Loader />}
      <MovieDetails details={details} />
    </>
  );
};

export default MovieDetailsPage;
