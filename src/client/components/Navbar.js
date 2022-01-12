import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  align-items: center;
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  display: flex;

  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  padding-right: 28px;
  font-size: 14px;
  pointer: cursor;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Amazon</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
