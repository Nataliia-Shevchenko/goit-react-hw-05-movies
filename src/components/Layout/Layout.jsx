import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header, Navig } from './Layout.styled';

const Layout = () => {
  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
      color: #1709d3;
    }
  `;

  return (
    <>
      <Header>
        <Navig>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navig>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
