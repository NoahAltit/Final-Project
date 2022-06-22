import styled from "styled-components";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignInForm = ({ setPageDisplay }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let email = ev.target[0].value;
    let password = ev.target[1].value;

    fetch("http://localhost:4000/login-account", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === 201) {
          setUserInfo(data.data);
          setIsLoggedIn(true);
          localStorage.getItem("isLoggedIn");
          localStorage.setItem("isLoggedIn", "1");
          history.push("/adventure");
        } else {
          setIsLoggedIn(isLoggedIn);
          setPageDisplay({
            message: data.message,
            status: data.status,
            ref: "signin",
          });
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name={"email"}
          placeholder={"Email"}
          required
          // autoComplete="off"
        />
        <Input
          type="password"
          name={"password"}
          placeholder={"Password"}
          required
          // autoComplete="off"
        />
        <LoginButton type="submit">Sign in</LoginButton>
      </Form>
      <Line />
      <SignUpLine>
        Not a member?
        <button onClick={() => setPageDisplay("signup")}>Sign up now</button>
      </SignUpLine>
    </>
  );
};

const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 3px;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin: 10px 0;
  }
`;

const Input = styled.input`
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  outline: none;

  ::placeholder {
    color: #e5e5e5;
    opacity: 0.7;
  }
`;

const LoginButton = styled.button`
  display: inline-block;
  background-color: darkslateblue;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 0.8rem 1.7rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    background: slateblue;
  }
`;

const Line = styled.div`
  margin: 10px 0;
  height: 0;
  border-bottom: 1px solid white;
`;

const SignUpLine = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  z-index: 2;
  > button {
    font-size: 14px;
    font-weight: 700;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default SignInForm;
