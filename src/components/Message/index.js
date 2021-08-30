import React from 'react';
import PropTypes from 'prop-types';

// Pour éviter la collision avec mon propre composant Message, je renomme l'import
import { Message as SemanticUiMessage } from 'semantic-ui-react';

import './styles.scss';

const Message = ({ resultsNumber, visible }) => (
  <SemanticUiMessage className={visible ? 'message--visible' : 'message--hidden'}>
    La recherche a donné {resultsNumber} résultats.
  </SemanticUiMessage>
);

Message.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Message;
