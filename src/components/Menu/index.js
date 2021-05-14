import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MyMenu = () => (

  <Menu>
    <NavLink to="/">
      <Menu.Item
        name="Recherche"
      >
        Recherche
      </Menu.Item>
    </NavLink>

    <NavLink to="/faq">
      <Menu.Item
        name="FAQ"
      >
        FAQ
      </Menu.Item>
    </NavLink>

  </Menu>

);

export default MyMenu;
