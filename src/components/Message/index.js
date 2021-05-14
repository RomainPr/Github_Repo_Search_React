import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const Message = () => (
  <Segment>
    <p className="message">La recherche a donné ***** résultats</p>
  </Segment>
);

export default Message;
