// import { useState } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ onFormSubmit }) => {
  const handleSubmit = useCallback(
    (values, { resetForm }) => {
      onFormSubmit(values.value.trim());
      resetForm();
    },
    [onFormSubmit]
  );

  return (
    <Header>
      <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
          <Field
            as={Input}
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

