import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: teal;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  margin-top: 24px;
  border: none;
  padding: 15px 20px;
  background-color: white;
`;

const Link = styled.a`width: 100%;`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
