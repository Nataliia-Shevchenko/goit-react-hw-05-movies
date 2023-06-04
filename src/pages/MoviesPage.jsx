import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovieByTitle } from 'services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  // const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetch() {
      try {
        if (query === '') {
          return;
        }
        const { results } = await fetchMovieByTitle(query);

        const filteredResults = results.map(({ title, id }) => {
          return { title, id };
        });
        setMoviesList(filteredResults);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    // if (query.trim() === '') {
    //   window.alert('Fill the search form!');
    //   return;
    // }
  
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.name.value });
    form.reset();
  };

  // const updateQueryString = e => {
  //   if (e.target.value === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ query: e.target.value });
  // };

  return (
    <>
      <SearchForm
        onSubmit={handleSubmit}
        // query={query}
        // onChange={updateQueryString}
      />
      {moviesList && <MoviesList list={moviesList} />}
    </>
  );
};
export default MoviesPage;
