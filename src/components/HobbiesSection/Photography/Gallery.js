import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

import { SLIDE_CHANGE_ENUM } from "../../../consts";
import { device } from "../../../GlobalStyles";

/**
 * functional React component - a container for gallery components - requires 12x12 grid
 * be displayed properly
 *
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Gallery = ({ imgList = [] }) => {
  const [fullscreenVisible, setFullscreenVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  /**
   * Triggers fullscreen mode and updates active image
   * @param {string} [img] - img link
   * @param {number} [id] - clicked image id
   * @return {undefined}
   */
  const handleFullScreen = (img, id) => {
    if (typeof img === "string" && typeof id === "number") {
      setFullscreenVisible(true);
      setCurrentImg({ img, id });
    } else {
      setFullscreenVisible(false);
    }
  };

  /**
   * Changes image which is displayed in fullscreen mode
   * @param {number} direction - (-1) previous / 1 next
   * @param {number} current - current id
   * @param {Object[]} arr - array of images to iterate over
   * @param {string} arr[].img - img link
   * @param {number} arr[].id - img id
   * @return {undefined}
   */
  const handleSlideChange = (direction, current, arr) => {
    if (!Array.isArray(arr)) {
      console.warn(
        `Incorrect type of argument. Expected Array instead got ${typeof arr}`
      );
      return;
    }
    if (typeof direction !== "number" || typeof current !== "number") {
      console.warn(
        `Incorrect type of argument. Expected number instead got ${typeof direction}`
      );
      return;
    } else {
      const nextSlideId = current + direction;
      if (nextSlideId < 0 || nextSlideId >= arr.length) return;
      const { img } = arr[nextSlideId];

      setCurrentImg({ img, id: nextSlideId });
    }
  };

  /**
   * Renders images on the screen
   * @param {Object[]} imgList
   * @return {Array} - react components
   */
  const renderImages = (imgList) => {
    if (!Array.isArray(imgList)) {
      console.error(
        `Incorrect type of argument. Expected array instead got ${typeof imgList}. Function execution stopped.`
      );
      return;
    }

    if (
      imgList.length < 1 ||
      !imgList[0].hasOwnProperty("img") ||
      !imgList[0].hasOwnProperty("desc")
    ) {
      console.error(
        `Incorrect object shape. Properites {img: string} & {desc: string} are required`
      );
    }

    return imgList.map((el, index) => (
      <GalleryImg content={el.desc} key={index}>
        <img
          src={el.img}
          alt={el.desc}
          onClick={() => handleFullScreen(el.img, index)}
        />
      </GalleryImg>
    ));
  };
  return (
    <Wrapper>
      {renderImages(imgList)}

      <FullScreenImg isVisible={fullscreenVisible}>
        <img src={currentImg && currentImg.img} alt="fullscreenImg" />

        <LeftArrowButton
          onClick={() =>
            handleSlideChange(SLIDE_CHANGE_ENUM.PREV, currentImg.id, imgList)
          }
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </LeftArrowButton>
        <RightArrowButton
          onClick={() =>
            handleSlideChange(SLIDE_CHANGE_ENUM.NEXT, currentImg.id, imgList)
          }
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </RightArrowButton>

        <CloseButton onClick={handleFullScreen}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      </FullScreenImg>
    </Wrapper>
  );
};

Gallery.propTypes = {
  /**
   * list of images to display in gallery
   */
  imgList: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};

Gallery.defaultProps = {
  imgList: [],
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 1/1/12/13;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  overflow-y: auto;
  overflow-x: hidden;

  img {
    margin: 1rem;

    height: 300px;
    width: auto;

    border-radius: 10px;

    user-select: none;

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
    max-width: 1600px;
    max-height: 1200px;
    height: calc(90%);
    width: auto;

    box-shadow: 0 0 0 4px white;

    @media ${device.laptop} {
      height: auto;
      width: 90%;
    }
  }
`;

const Button = styled.button`
  position: absolute;

  border: none;
  font-size: 4rem;

  color: ${({ theme }) => theme.colors.gray};
  background: none;

  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const CloseButton = styled(Button)`
  top: 0;
  left: 1rem;
`;

const LeftArrowButton = styled(Button)`
  left: 1rem;
  top: 50%;
`;

const RightArrowButton = styled(Button)`
  right: 1rem;
  top: 50%;
`;

export default Gallery;
