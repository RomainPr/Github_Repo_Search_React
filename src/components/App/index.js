// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// == Import Components
import Search from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Results from 'src/components/ReposResults';
import Error from 'src/components/NotFound';
import MyMenu from 'src/components/Menu';
import Questions from 'src/components/FAQ';

// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => {
  const [results, setResults] = useState([]);
  const [queryValue, setQueryValue] = useState('');
  const [numberOfResults, setResultsNumber] = useState(0);
  const [isVisible, setVisibilityResult] = useState(false);

  const handleChangeQuery = (queryVal) => {
    setQueryValue(queryVal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/search/repositories?q=${queryValue}`)
      .then((response) => {
        setResults(response.data.items);
        setResultsNumber(response.data.total_count);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        setVisibilityResult(true);
        setQueryValue('');
      });
  };

  return (
    <div className="app">
      <div className="app__logo">
        <img src={githubLogo} alt="react logo" />
      </div>
      <MyMenu />
      <Switch>
        <Route exact path="/">
          <Search
            query={queryValue}
            onSubmitQuery={handleFormSubmit}
            onChangeQuery={handleChangeQuery}
          />
          <Message resultsNumber={numberOfResults} visible={isVisible} />
          <Results reposResult={results} />
        </Route>
        <Route exact path="/faq">
          <Questions />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
