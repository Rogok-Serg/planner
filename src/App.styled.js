import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: #ffffff;
  border-bottom: 1px solid #000;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background: #50c0e6;
  );
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  margin-left: 16px;
  color: #fff;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #3470ff;
  }
`;

export const StyledMain = styled.main`
  // display: flex;
  // justify-content: center;
  // align-content: center;
`;

export const StyledCont = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // width: 100%;
`;
