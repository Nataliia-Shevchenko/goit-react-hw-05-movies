import { Form, FormInput, FormBtn } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit}) => {

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="name"
      ></FormInput>
      <FormBtn typeof="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}