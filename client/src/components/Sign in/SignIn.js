import styled from "styled-components";

import { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Message from "./Message";
import bg from "../../assets/Bg.jpg";
import Modal from "../Bday Modal/Modal";

const SignIn = () => {
  const [pageDisplay, setPageDisplay] = useState("signin");
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <PageWrapper>
      {/* {show && <Modal handleClose={handleClose} />} */}
      <Modal />
      <ContentWrapper>
        <Details>
          {pageDisplay === "signin" && (
            <SignInForm setPageDisplay={setPageDisplay} />
          )}
          {pageDisplay === "signup" && (
            <SignUpForm setPageDisplay={setPageDisplay} />
          )}

          {pageDisplay.message && (
            <Message
              setPageDisplay={setPageDisplay}
              pageDisplay={pageDisplay}
            />
          )}
        </Details>
        <BgImg src={bg} />
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
`;

const Details = styled.div`
  width: 400px;
  height: 420px;
  background-color: rgba(0, 0, 0, 0.9);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
`;

const BgImg = styled.img`
  width: 500px;
  filter: brightness(80%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default SignIn;
