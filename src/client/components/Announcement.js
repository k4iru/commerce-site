import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: teal;
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  justify-content: center;
`;

const Announcement = () => {
  return (
    <div>
      <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    </div>
  );
};

export default Announcement;
