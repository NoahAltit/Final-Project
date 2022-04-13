import styled from "styled-components";

import vid from "../../assets/vid.mp4";
import poster from "../../assets/Poster.png";
import vidbg from "../../assets/VidBg.jpg";

import { Link } from "react-router-dom";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const VideoSection = () => {
  return (
    <Wrapper>
      <VideoContent>
        <Video controls autoPlay poster={poster}>
          <Source src={vid} type="video/mp4" />
        </Video>
        <Icon>
          <Link to="/home">
            <IoMdRemoveCircleOutline className="escape" />
          </Link>
        </Icon>
      </VideoContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${vidbg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const VideoContent = styled.div`
  width: 80%;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const Source = styled.source``;

const Icon = styled.div`
  font-size: 50px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.2s ease-in-out;

  > a {
    text-decoration: none;
    color: bisque;
  }

  > a:hover {
    color: #f6834f;
  }
`;

export default VideoSection;
