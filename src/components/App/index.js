// == Import npm
import React from 'react';

// == Import Components
import Search from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Results from 'src/components/ReposResults';

// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <div className="app__logo">
      <img src={githubLogo} alt="react logo" />
    </div>
    <Search />
    <Message />
    <Results />
  </div>
);

// == Export
export default App;
