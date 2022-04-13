import styled from "styled-components";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Message = ({ setPageDisplay, pageDisplay }) => {
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();

  if (pageDisplay.status === 201 && pageDisplay.ref === "signup") {
    setTimeout(() => {
      setUserInfo({ email: pageDisplay.email });
      history.push("/adventure");
    }, 5000);
  }

  return (
    <Wrapper>
      <MessageDiv>{pageDisplay.message}</MessageDiv>
      {pageDisplay.status !== 201 && (
        <LinkDiv onClick={() => setPageDisplay(`${pageDisplay.ref}`)}>
          Try again
        </LinkDiv>
      )}
      {pageDisplay.ref === "password" && pageDisplay.status === 201 && (
        <LinkDiv onClick={() => setPageDisplay("signin")}>
          Back to sign in
        </LinkDiv>
      )}
      {pageDisplay.status === 201 && pageDisplay.ref === "signup" && (
        <LinkDiv onClick={() => history.push("/adventure")}>
          <p>You are now being redirected.</p>
          <p>Click here if you are not redirected after 5 seconds.</p>
        </LinkDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10px;
  font-size: 20px;
`;

const LinkDiv = styled.button`
  background: none;
  border: none;
  z-index: 2;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  > p {
    font-size: 15px;
    margin: 20px 0;
  }
`;

export default Message;
