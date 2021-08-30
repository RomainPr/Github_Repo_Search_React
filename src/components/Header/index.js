import React from 'react';

import { Image } from 'semantic-ui-react';

import logoGithub from 'src/assets/images/logo-github.png';

const Header = () => (
  <header>
    <Image centered src={logoGithub} alt="logo Github" />
  </header>
);

export default Header;
