import React from 'react';
import { Segment } from 'semantic-ui-react';

const Questions = () => (

  <Segment>
    <div className="questions">
      <h1>FAQ</h1>
      <div>
        <h2>A quoi ça sert ?</h2>
        <p>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>
        <h2>Comment puis-je faire une recherche ?</h2>
        <p>Sur la page recherche, complétez le champ de recherche et valider la recherche</p>
        <h2>Puis-je chercher n'importe quel terme ?</h2>
        <p>Oui, c'est ouf !!</p>
      </div>
    </div>
  </Segment>

);

export default Questions;
