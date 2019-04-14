import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface IProps {
  exact: boolean;
  link: string;
}

const Li = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

const Link = styled(NavLink)`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  @media (min-width: 500px) {
    color: #fff;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
  }

  &:hover,
  &:active,
  &.active {
    color: #40a4c8;

    @media (min-width: 500px) {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: #fff;
    }
  }
`;

const NavigationItem: React.FC<IProps> = ({ exact, link, children }) => {
  return (
    <Li>
      <Link exact={exact} to={link} activeClassName="active">
        {children}
      </Link>
    </Li>
  );
};

export default NavigationItem;
