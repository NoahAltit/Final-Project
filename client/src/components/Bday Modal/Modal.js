import styled, { keyframes } from "styled-components";

import bg from "../../assets/ModalBg.jpg";
import ReactDOM from "react-dom";
import { useState } from "react";

const Backdrop = () => {
  return <Bdrop></Bdrop>;
};

const ModalOverlay = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div>
          <Backdrop />
          <Wrapper>
            <Content>
              <Title>KÒKTEL</Title>
              <Text>Are You Over 18 Years Old?</Text>
              <Confirmation>
                <YesBtn onClick={() => handleClose()}>YES</YesBtn>
                <NoBtn>
                  <a href="https://www.google.com/">NO</a>
                </NoBtn>
              </Confirmation>
            </Content>
          </Wrapper>
        </div>
      )}
    </>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {/* {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))} */}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

const Bdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  /* background-color: black; */
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 29%;
  top: 29%;
  width: 800px;
  height: 400px;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  animation: ${slideDown} 300ms ease-out forwards;
`;

const Title = styled.h1`
  font-size: 50px;
  color: antiquewhite;
  letter-spacing: 2px;
`;

const Text = styled.h3`
  margin-top: 13%;
  font-size: 30px;
`;

const Confirmation = styled.div`
  margin: 50px 0;
`;

const YesBtn = styled.button`
  margin: 0 15px;
  border: 2px solid white;
  outline: none;
  background: none;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
const NoBtn = styled(YesBtn)`
  > a {
    transition: all 0.3s ease-in-out;
    color: white;
    background: none;
    text-decoration: none;
  }

  &:hover {
    > a {
      color: black;
    }
  }
`;

export default Modal;
