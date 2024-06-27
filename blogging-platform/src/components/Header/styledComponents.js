import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
    color: white;
  text-decoration: none;
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NavItem = styled.a`
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0;
  }
`;