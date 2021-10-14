import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SlideChange } from "consts";
import * as P from "./parts";

export interface ImageObject {
  img: string;
  desc: string;
}
export interface GalleryProps {
  imgList: Array<ImageObject>;
}

export interface CurrentImageObject {
  img: string;
  id: number;
}

/**
 * functional React component - a container for gallery components - requires 12x12 grid
 * be displayed properly
 *
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const Gallery = ({ imgList = [] }: GalleryProps) => {
  const [fullscreenVisible, setFullscreenVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState<
    CurrentImageObject | undefined
  >();

  /**
   * Triggers fullscreen mode and updates active image
   * @param {string} [img] - img link
   * @param {number} [id] - clicked image id
   * @return {undefined}
   */
  const handleFullScreen = (img: string, id: number) => {
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
  const handleSlideChange = (
    direction: SlideChange,
    current: number | undefined
  ) => {
    if (!Array.isArray(imgList)) {
      console.warn(
        `Incorrect type of argument. Expected Array instead got ${typeof imgList}`
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
      if (nextSlideId < 0 || nextSlideId >= imgList.length) return;
      const { img } = imgList[nextSlideId];

      setCurrentImg({ img, id: nextSlideId });
    }
  };

  /**
   * Renders images on the screen
   * @param {Object[]} imgList
   * @return {Array} - react components
   */
  const renderImages = () => {
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
      <P.GalleryImg content={el.desc} key={index}>
        <img
          src={el.img}
          alt={el.desc}
          onClick={() => handleFullScreen(el.img, index)}
        />
      </P.GalleryImg>
    ));
  };
  return (
    <P.Wrapper>
      {renderImages()}

      <P.FullScreenImageContainer isVisible={fullscreenVisible}>
        <P.FullScreenImage
          src={currentImg && currentImg.img}
          alt="fullscreenImg"
        />

        <P.LeftArrowButton
          onClick={() => handleSlideChange(SlideChange.PREV, currentImg?.id)}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </P.LeftArrowButton>
        <P.RightArrowButton
          onClick={() => handleSlideChange(SlideChange.NEXT, currentImg?.id)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </P.RightArrowButton>

        <P.CloseButton onClick={() => handleFullScreen}>
          <FontAwesomeIcon icon={faTimes} />
        </P.CloseButton>
      </P.FullScreenImageContainer>
    </P.Wrapper>
  );
};

export default Gallery;
