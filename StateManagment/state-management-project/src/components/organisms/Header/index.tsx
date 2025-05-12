import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
`;

const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const NavItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const NavLabel = styled(Typography)`
  font-family: "Cera Pro", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: hsla(202, 92%, 15%, 1);
`;

const DropdownSymbol = styled.span`
  font-size: 10px;
  margin-top: 2px;
  color: hsla(202, 92%, 15%, 1);
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/icons/logo.svg" alt="Logo" />

      <RightSection>
        <img
          src="/assets/icons/search.svg"
          alt="Search"
          style={{ height: 24, cursor: "pointer" }}
        />

        <NavItem>
          <NavLabel>Explore</NavLabel>
          <DropdownSymbol>▼</DropdownSymbol>
        </NavItem>

        <NavItem>
          <NavLabel>My Library</NavLabel>
        </NavItem>

        <NavItem>
          <NavLabel>Highlights</NavLabel>
        </NavItem>

        <NavItem>
          <NavLabel>Account</NavLabel>
          <DropdownSymbol>▼</DropdownSymbol>
        </NavItem>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
