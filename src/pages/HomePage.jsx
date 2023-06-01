import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'components/services/fetch';
import { Link } from 'react-router-dom';

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
      } finally {
        //   setLoading(false);
      }
    }

    fetch();
  }, []);


  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {trends?.map(el => (
          <li key={el.id} >
            <Link to={`/movies/${el.id}`} >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
