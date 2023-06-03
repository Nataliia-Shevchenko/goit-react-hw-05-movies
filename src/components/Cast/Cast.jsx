import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/services/fetch';
import { CastBlock, CastImg, CastData } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const { cast } = await fetchCast(movieId);

        const filteredResults = cast.map(
          ({ name, character, profile_path, id }) => {
            return { name, character, profile_path, id };
          }
        );

        setCast(filteredResults);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetch();
  }, [movieId]);

  const defaultImg =
    'https://cdn-icons-png.flaticon.com/512/847/847969.png?w=740&t=st=1685547292~exp=1685547892~hmac=2825f00d1a2c61ae503ac799344847357b8a6baa8b9db6ee1132a6431b92254c';

  return (
    <>
      <ul>
        {cast.length === 0 ? (
          <p>We don't have any info for this movie.</p>
        ) : (
          cast.map(el => (
            <CastBlock key={el.id}>
              <div>
                <CastImg
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                      : defaultImg
                  }
                  alt={el.name}
                />
                <CastData>{el.name}</CastData>
                <CastData>Character: {el.character}</CastData>
              </div>
            </CastBlock>
          ))
        )}
      </ul>
    </>
  );
};

export default Cast;
