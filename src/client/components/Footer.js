import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SITE.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus, odio eaque unde nisi nihil quibusdam quidem assumenda perspiciatis deserunt harum
          eligendi, temporibus ipsa voluptatem eum officiis obcaecati beatae earum nulla dolorem ex saepe, sed adipisci? Harum sunt reiciendis mollitia neque, vitae consectetur,
          aut eligendi delectus esse veniam iste at.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
