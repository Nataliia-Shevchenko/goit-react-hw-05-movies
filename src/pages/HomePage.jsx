import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/fetch';
// import {useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await fetchTrendMovies();

        const filteredResults = results.map(({ title, id }) => {
          return { title, id };
        });
        setTrends(filteredResults);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        <MoviesList list={trends} />
      </ul>
    </div>
  );
};

export default HomePage;
