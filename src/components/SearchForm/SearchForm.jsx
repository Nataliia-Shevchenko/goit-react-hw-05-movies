import { Form, FormInput, FormBtn } from './SearchForm.styled';

const SearchForm = ({ onSubmit, query}) => {
  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   if (query.trim() === '') {
  //     window.alert('Fill the search form!');
  //     return;
  //   }
  //   onSubmit(query);
  // };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="name"
        // value={query}
        // onChange={onChange}
      ></FormInput>
      <FormBtn typeof="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchForm;
