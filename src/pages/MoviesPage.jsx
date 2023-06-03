import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovieByTitle } from 'components/services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';
// import { useMemo } from 'react';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);


  useEffect(() => {
    async function fetch() {
      try {
        if (searchValue === '') {
          return;
        }
        const { results } = await fetchMovieByTitle(searchValue);

        const filteredResults = results.map(({ title, id }) => {
          return { title, id };
        });
        setMoviesList(filteredResults);
     
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, [searchValue]);

  const handleSubmit = query => {
    setSearchValue(query);
  };

  // const 

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList list={moviesList} />
    </>
  );
};
export default MoviesPage;
