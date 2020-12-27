import React from 'react';
import {Link} from '@reach/router';
// import { css } from '@emotion/react';

const NavBar = () => {
 return(
    <header>
      <Link to='/'>Adopt Me!</Link>
      <span role='img' aria-label='logo'>🧚‍♀️</span>
  </header>
 )
}

export default NavBar;