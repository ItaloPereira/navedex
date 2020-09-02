import React from 'react'; 
import { logout } from '@utils/auth';
import Logo from '@components/atoms/Logo';
import { Viewport, LogoWrapper, Logout } from './style';

const NavBar = () => {
  return (
    <Viewport>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Logout onClick={logout}>Sair</Logout>
    </Viewport>
  );
};

export default NavBar;
