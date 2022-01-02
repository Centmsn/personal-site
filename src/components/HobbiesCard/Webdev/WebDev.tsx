import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import SubContainer from "components/generics/SubContainer/SubContainer";
import Slide from "./Slide";
import InitialSlide from "./InitialSlide";
import Spinner from "components/generics/Spinner";
import { CONTENT_TYPE_ENUM } from "utils/enums/contentfulContentTypes";
import { useContentfulData } from "hooks/useContentfulData";
import { SlideChange } from "consts";
import { ISlideFields, IWebDevFields } from "types/contentful";
import * as P from "./parts";

/**
 * functional React component - renders webDev section
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const HobbiesWebDev = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideChangeDirection, setSlideChangeDirection] = useState(SlideChange.NEXT);
  const { contentulData, isLoading } = useContentfulData<ISlideFields>(CONTENT_TYPE_ENUM.slide);
  const { contentulData: slideContent } = useContentfulData<IWebDevFields>(CONTENT_TYPE_ENUM.webDev);
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = contentulData && currentSlideIndex === contentulData?.items.length - 1;
  const currentSlide = contentulData?.items[currentSlideIndex].fields;

  const handleSlideChange = useCallback(
    direction => {
      if (contentulData) {
        if (direction === SlideChange.NEXT && currentSlideIndex < contentulData.items.length - 1) {
          setCurrentSlideIndex(prev => prev + 1);
          // setSlideChangeDirection(SlideChange.PREV);
        } else if (direction === SlideChange.PREV && currentSlideIndex > 0) {
          setCurrentSlideIndex(prev => prev - 1);
          // setSlideChangeDirection(SlideChange.NEXT);
        }
      }
    },
    [currentSlideIndex, contentulData]
  );

  useEffect(() => {
    if (isFirstSlide) {
      setSlideChangeDirection(SlideChange.PREV);
    } else if (isLastSlide) {
      setSlideChangeDirection(SlideChange.NEXT);
    }
  }, [isFirstSlide, isLastSlide]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        handleSlideChange(SlideChange.PREV);
      } else if (e.keyCode === 39) {
        handleSlideChange(SlideChange.NEXT);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSlideChange]);

  //! may cause inifite loading if an error occured - add error handling
  if (isLoading || !currentSlide || !slideContent) {
    return (
      <SubContainer>
        <Spinner />
      </SubContainer>
    );
  }
  // console.log(slideChangeDirection);

  return (
    <SubContainer>
      <AnimatePresence>
        <P.StyledMotionDiv
          key={currentSlideIndex}
          initial={{ x: slideChangeDirection === SlideChange.NEXT ? -150 : 150 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: slideChangeDirection === SlideChange.NEXT ? "50vw" : "-50vw", opacity: 0 }}
        >
          {isFirstSlide ? (
            <InitialSlide slideContent={slideContent} />
          ) : (
            <Slide slideIndex={currentSlideIndex} slideFields={currentSlide} />
          )}
        </P.StyledMotionDiv>
      </AnimatePresence>

      <P.LeftArrow onClick={() => handleSlideChange(SlideChange.PREV)} disabled={isFirstSlide}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </P.LeftArrow>

      <P.RightArrow onClick={() => handleSlideChange(SlideChange.NEXT)} disabled={isLastSlide}>
        <FontAwesomeIcon icon={faCaretRight} />
      </P.RightArrow>
    </SubContainer>
  );
};

export default HobbiesWebDev;
