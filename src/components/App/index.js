// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// == Import Components
import Header from 'src/components/Header';
import Search from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Results from 'src/components/ReposResults';
import Error from 'src/components/NotFound';
import MyMenu from 'src/components/Menu';
import Questions from 'src/components/FAQ';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [results, setResults] = useState(null);
  const [queryValue, setQueryValue] = useState('');
  const [isVisible, setVisibilityResult] = useState(false);

  const handleChangeQuery = (queryVal) => {
    setQueryValue(queryVal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/search/repositories?q=${queryValue}`)
      .then((response) => {
        setResults(response.data);
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
      <Header />
      <MyMenu />
      <Switch>
        <Route exact path="/">
          <Search
            query={queryValue}
            onSubmitQuery={handleFormSubmit}
            onChangeQuery={handleChangeQuery}
          />
          {results && (
            <>
              <Message resultsNumber={results.total_count} visible={isVisible} />
              <Results reposResult={results.items} />
            </>
          )}

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
