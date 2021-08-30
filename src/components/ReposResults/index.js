import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

import './styles.scss';

const Results = ({ reposResult }) => (
  <div className="searchResults">
    <Card.Group itemsPerRow={3}>
      {reposResult.map((repo) => (
        <Card
          key={repo.id}
          image={repo.owner.avatar_url}
          header={repo.name}
          meta={repo.meta}
          description={repo.description}
          extra={(
            <a>
              <Icon name="star outline" />
              {repo.stargazers_count} stars
            </a>
          )}
        />
      ))}
    </Card.Group>
  </div>
);

Results.propTypes = PropTypes.array.isRequired;

export default Results;
