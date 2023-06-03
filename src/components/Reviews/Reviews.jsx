import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetch';
import { Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useState(() => {
    async function fetch() {
      try {
        const { results } = await fetchReviews(movieId);

        const filteredResults = results.map(({ id, author, content }) => {
          return { id, author, content };
        });

        setReviews(filteredResults);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetch();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any rewiews for this movie.</p>
      ) : (
        reviews.map(el => (
          <Review key={el.id}>
            <h4>Author: {el.author} </h4>
            <p>{el.content}</p>
          </Review>
        ))
      )}
    </>
  );
};

export default Reviews;
