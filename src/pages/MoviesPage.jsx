import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovieByTitle } from 'components/services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  //   () => JSON.parse(localStorage.getItem('list')) ?? []
  // );

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
        // localStorage.setItem('list', JSON.stringify(moviesList));
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, [searchValue]);

  const handleSubmit = query => {
    setSearchValue(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList list={moviesList} />
    </>
  );
};
export default MoviesPage;
