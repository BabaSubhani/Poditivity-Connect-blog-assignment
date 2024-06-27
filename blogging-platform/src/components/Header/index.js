import React from 'react';
import {Link} from 'react-router-dom'
import { HeaderContainer, Logo, Nav, NavItem } from './styledComponents';

const Header = () => {
  return (
    <HeaderContainer>
    <Link to="/">
        <Logo>Blogging Platform</Logo>
    </Link>
      <Nav>
        <Link to="/">
        <NavItem >Home</NavItem>
        </Link>
        <Link to="/addpost">
        <NavItem>Add Post</NavItem>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
