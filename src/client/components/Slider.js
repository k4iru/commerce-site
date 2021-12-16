import React from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  background-color: coral;
  display: flex;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const Arrow = styled.div`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  position: absolute;
  right: ${(props) => props.direction === "right" && "10px"};
  top: 0;
  width: 50px;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;`;

const Image = styled.img`
height: 80%;
`;

const InfoContainer = styled.div`
flex: 1;`;
const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer><Image src="https://st.depositphotos.com/1269204/1219/i/950/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"/></ImgContainer>
            <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
