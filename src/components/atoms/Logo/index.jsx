import React from 'react';
import { Link } from 'react-router-dom';

const logoSrc = '/static/img/logo/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img width="100%" src={logoSrc} alt="Logo nave.rs" />
    </Link>
  );
};

export default Logo;
