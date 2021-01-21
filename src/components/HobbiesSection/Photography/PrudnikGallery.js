import img01 from "../../../assets/prudnik_gal_01.jpg";
import img02 from "../../../assets/prudnik_gal_02.jpg";
import img03 from "../../../assets/prudnik_gal_03.jpg";
import img04 from "../../../assets/prudnik_gal_04.jpg";
import img05 from "../../../assets/prudnik_gal_05.jpg";
import img06 from "../../../assets/prudnik_gal_06.jpg";
import img07 from "../../../assets/prudnik_gal_07.jpg";
import img08 from "../../../assets/prudnik_gal_08.jpg";
import img09 from "../../../assets/prudnik_gal_09.jpg";
import img10 from "../../../assets/prudnik_gal_10.jpg";
import img11 from "../../../assets/prudnik_gal_11.jpg";
import img12 from "../../../assets/prudnik_gal_12.jpg";
import img13 from "../../../assets/prudnik_gal_13.jpg";
import img14 from "../../../assets/prudnik_gal_14.jpg";
import img15 from "../../../assets/prudnik_gal_15.jpg";

import SubSectionContainer from "../SubSectionContainer";
import Gallery from "./Gallery";

/**
 * functional React component - renders gallery of images
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const PrudnikGallery = () => {
  const list = [
    { img: img01, desc: "Góry Opawskie" },
    { img: img02, desc: "Las koło Prudnika" },
    { img: img03, desc: "Las koło Prudnika" },
    { img: img04, desc: "Las koło Prudnika" },
    { img: img05, desc: "Dzięcioły w Wieszczynie" },
    { img: img06, desc: "Maki w polu" },
    { img: img07, desc: "Dożynki w Łące Prudnickiej" },
    { img: img08, desc: "Prudnickie Lasy" },
    { img: img09, desc: "Las we mgle" },
    { img: img10, desc: "Wieczór w zamglonym lesie" },
    { img: img11, desc: "Widok z Kopy Biskupiej" },
    { img: img12, desc: "Kwiaty na Kopie Biskupiej" },
    { img: img13, desc: "Albrechtice - koło Prudnika" },
    { img: img14, desc: "Zachód koło klasztoru" },
    { img: img15, desc: "Park w Prudniku" },
  ];

  return (
    <SubSectionContainer preventLoadingEffect={true}>
      <Gallery imgList={list} />
    </SubSectionContainer>
  );
};

export default PrudnikGallery;
