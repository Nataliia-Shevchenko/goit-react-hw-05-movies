import { useSearchParams } from 'react-router-dom';
import {Form, FormInput, FormBtn} from './SearchForm.styled'

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      window.alert('Fill the search form!');
      return;
    }
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormInput type="text" value={query} onChange={updateQueryString}></FormInput>
      <FormBtn typeof="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchForm;
