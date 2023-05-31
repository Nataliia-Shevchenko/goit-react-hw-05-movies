import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByTitle } from 'components/services/fetch';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  useEffect(() => {
    async function fetch() {
      try {
        
        if (searchValue === '') {
          return;
        }
        const { results } = await fetchMovieByTitle(searchValue);
        // console.log(results);

        const filteredResults = results.map(({ title, id }) => {
          return { title, id };
        });
        setMoviesList(filteredResults);
        // console.log(filteredResults);
      } catch (err) {
      
        console.log(err);
      } finally {
        //   setLoading(false);
      }
    }
    fetch();
  }, [searchValue]);

  // let searchData = '';
  // const handleInputChange = e => {
  //   searchData = e.target.value;
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      window.alert('Fill the search form!');
      return;
    }

    setSearchValue(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={updateQueryString}></input>
        <button typeof="submit">Search</button>
      </form>
      <ul>
        {moviesList?.map(el => (
          <Link key={el.id} to={`${el.id}`} state={{from: location}}>
            <li>{el.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
