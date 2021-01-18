import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Gallery = ({ imgList }) => {
  const [fullscreenVisible, setFullscreenVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleFullScreen = (img) => {
    setFullscreenVisible(true);
    setCurrentImg(img);
  };

  const renderImages = (imgList) => {
    return imgList.map((el) => (
      <img
        src={el.img}
        alt={el.desc}
        onClick={() => handleFullScreen(el.img)}
      />
    ));
  };
  return (
    <Wrapper>
      {renderImages(imgList)}
      <FullScreenImg
        isVisible={fullscreenVisible}
        onClick={() => setFullscreenVisible(false)}
      >
        <img src={currentImg} alt="" />
      </FullScreenImg>
    </Wrapper>
  );
};

Gallery.propTypes = {
  imgList: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.object,
      desc: PropTypes.string,
    })
  ).isRequired,
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 1/1/12/13;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-y: auto;
  overflow-x: hidden;

  img {
    margin: 1rem;
    height: 150px;
    width: auto;

    border-radius: 10px;

    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 4px white;
    }
  }
`;

const FullScreenImg = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(150, 150, 150, 0.5);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  img {
    height: calc(90%);
    width: auto;
  }
`;

export default Gallery;
