// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import Components
import Search from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Results from 'src/components/ReposResults';

// == Import data
import ReposGitDatas from 'src/data/repos';

// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => {
  const [results, setResults] = useState([]);
  const [queryValue, setQueryValue] = useState('');

  const handleChangeQuery = (queryVal) => {
    setQueryValue(queryVal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/search/repositories?q=${queryValue}`)
      .then((response) => {
        setResults(response.data.items);
      })
      .catch((error) => {
      // .catch - appelé en cas d'erreur serveur (400, 500) ou erreur JS front sur la requete
      // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {

      });
  };

  return (
    <div className="app">
      <div className="app__logo">
        <img src={githubLogo} alt="react logo" />
      </div>
      <Search
        query={queryValue}
        onSubmitQuery={handleFormSubmit}
        onChangeQuery={handleChangeQuery}
      />
      <Message />
      <Results reposResult={results} />
    </div>
  );
};

// == Export
export default App;
