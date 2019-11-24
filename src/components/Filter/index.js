// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

// == Import : local
import './filter.scss';

// == Composant
const Filter = ({
  InputChange,
  searchByKeyWord,
  searchByContry,
  searchByDate,
  onSubmitSearch,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();
    onSubmitSearch();
  };

  const changeHandler = (event) => {
    InputChange(event.target.name, event.target.value);
  };


  return (
    <div id="filter">

      <h2 className="title-filter">Filtres</h2>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Mot clé</label>
          <input 
          onChange={changeHandler}
          value={searchByKeyWord}
          placeholder='Mot clé' 
          id='form-subcomponent-shorthand-input-key'
          />
        </Form.Field>
        <Form.Field>
          <label>Pays</label>
          <input 
          placeholder='Pays' 
          onChange={changeHandler}
          value={searchByContry}
          id='form-subcomponent-shorthand-input-contry'
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input 
          placeholder='Date' 
          onChange={changeHandler}
          value={searchByDate}
          id='form-subcomponent-shorthand-input-date'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

Filter.propTypes = {
  searchByKeyWord: PropTypes.string.isRequired,
  searchByContry: PropTypes.string.isRequired,
  searchByDate: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};


// == Export
export default Filter;
