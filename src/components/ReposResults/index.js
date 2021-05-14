import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

const Results = ({ reposResult }) => (
  <div className="searchResults">
    <Card.Group itemsPerRow={3}>
      {reposResult.map((repo) => (
        <Card key={repo.id}>
          <div className="searchResults__card">
            <Image src={repo.owner.avatar_url} wrapped ui={false} className="searchResults__card__img" />

            <Card.Content className="searchResults__card__content">
              <Card.Header>
                <h2 className="searchResults__card__content__title">{repo.name}</h2>
              </Card.Header>
              <Card.Meta>
                <span className="date">{repo.name}</span>
              </Card.Meta>
              <Card.Description>
                <p className="searchResults__card__content__text">{repo.description}</p>
              </Card.Description>
            </Card.Content>
          </div>
        </Card>
      ))}
    </Card.Group>
  </div>
);

Results.propTypes = {
  reposResult: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
  })).isRequired,
};

export default Results;
