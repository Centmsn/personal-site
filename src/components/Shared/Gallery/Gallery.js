import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";

import { SLIDE_CHANGE_ENUM } from "../../../consts";
import {
  Wrapper,
  GalleryImg,
  FullScreenImg,
  CloseButton,
  LeftArrowButton,
  RightArrowButton,
} from "./styled";

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

export default Gallery;
