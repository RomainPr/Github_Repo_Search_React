import React from 'react';
import PropTypes from 'prop-types';
import { Input, Segment } from 'semantic-ui-react';

import './styles.scss';

const Search = ({ onSubmitQuery, onChangeQuery, query }) => (
  <form className="searchBar" onSubmit={onSubmitQuery}>
    <Segment padded>
      <Input
        icon="search"
        iconPosition="left"
        placeholder="Chercher un repo"
        className="searchBar__input"
        value={query}
        onSubmit={(event) => onSubmitQuery(event.preventDefault())}
        onChange={(event) => onChangeQuery(event.target.value)}
      />
    </Segment>
  </form>
);

Search.propTypes = {
  onSubmitQuery: PropTypes.func.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
