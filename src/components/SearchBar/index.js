import React from 'react';
import PropTypes from 'prop-types';
import { Input, Segment } from 'semantic-ui-react';

import './styles.scss';

const Search = () => (
  <form className="searchBar">
    <Segment padded>
      <Input icon="search" iconPosition="left" placeholder="Chercher un repo" className="searchBar__input" />
    </Segment>
  </form>
);

export default Search;
