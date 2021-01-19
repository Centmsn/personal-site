import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Gallery = ({ imgList }) => {
  const [fullscreenVisible, setFullscreenVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleFullScreen = (img, desc) => {
    setFullscreenVisible(true);
    setCurrentImg(img);
  };

  const renderImages = (imgList) => {
    return imgList.map((el) => (
      <GalleryImg content={el.desc}>
        <img
          src={el.img}
          alt={el.desc}
          onClick={() => handleFullScreen(el.img, el.desc)}
        />
      </GalleryImg>
    ));
  };
  return (
    <Wrapper>
      {renderImages(imgList)}
      <FullScreenImg
        isVisible={fullscreenVisible}
        onClick={() => setFullscreenVisible(false)}
      >
        <CloseButton>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <img src={currentImg} alt="fullscreenImg" />
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

const GalleryImg = styled.div`
  position: relative;

  &:after {
    content: "${({ content }) => content}";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;

    text-align: center;
    color: white;

    visibility: hidden;
  }

  &:hover::after {
    visibility: visible;
  }
`;

const FullScreenImg = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(150, 150, 150, 0.75);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  img {
    height: calc(90%);
    width: auto;

    box-shadow: 0 0 0 4px white;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 1rem;

  border: none;
  color: ${({ theme }) => theme.colors.yellow};
  background: none;

  font-size: 3rem;

  &:focus {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Gallery;
