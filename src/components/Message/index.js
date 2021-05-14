import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const Message = ({ resultsNumber }) => (
  <Segment>
    <p className="message">La recherche a donné {resultsNumber} résultats</p>
  </Segment>
);

Message.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
};

export default Message;
