import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/fetch';
// import {useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList'

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  // const location = useLocation();


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
        {/* {trends?.map(el => (
          <li key={el.id} >
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        ))} */}
        <MoviesList list={trends} />
      </ul>
    </div>
  );
};

export default HomePage;