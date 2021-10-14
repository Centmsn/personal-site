import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SlideChange } from "consts";
import {
  Wrapper,
  GalleryImg,
  FullScreenImg,
  CloseButton,
  LeftArrowButton,
  RightArrowButton,
} from "./parts";

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
  const [currentImg, setCurrentImg] = useState<CurrentImageObject | null>(null);

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
    current: number,
    arr: Array<CurrentImageObject>
  ) => {
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
  const renderImages = imgList => {
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
            handleSlideChange(SlideChange.PREV, currentImg.id, imgList)
          }
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </LeftArrowButton>
        <RightArrowButton
          onClick={() =>
            handleSlideChange(SlideChange.NEXT, currentImg.id, imgList)
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

export default Gallery;
