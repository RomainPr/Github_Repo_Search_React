import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import './styles.scss';

const Message = ({ resultsNumber, visible }) => (
  <Segment className={visible ? 'message--visible' : 'message--hidden'}>
    <p>La recherche a donné {resultsNumber} résultats</p>
  </Segment>
);

Message.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Message;
