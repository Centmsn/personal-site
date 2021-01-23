import img01 from "../../../assets/others_gal_01.jpg";
import img02 from "../../../assets/others_gal_02.jpg";
import img03 from "../../../assets/others_gal_03.jpg";
import img04 from "../../../assets/others_gal_04.jpg";
import img05 from "../../../assets/others_gal_05.jpg";
import img06 from "../../../assets/others_gal_06.jpg";
import img07 from "../../../assets/others_gal_07.jpg";
import img08 from "../../../assets/others_gal_08.jpg";
import img09 from "../../../assets/others_gal_09.jpg";
import img10 from "../../../assets/others_gal_10.jpg";
import img11 from "../../../assets/others_gal_11.jpg";
import img12 from "../../../assets/others_gal_12.jpg";
import img13 from "../../../assets/others_gal_13.JPG";
import img14 from "../../../assets/others_gal_14.jpg";

import styled from "styled-components";

import SubSectionContainer from "../SubSectionContainer";
import Gallery from "./Gallery";

/**
 * functional React component - renders gallery of images
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const OthersGallery = () => {
  const list = [
    { img: img01, desc: "Devin" },
    { img: img02, desc: "Panorama Bratysławy" },
    { img: img03, desc: "Parlament w Budapeszcie" },
    { img: img04, desc: "Panorama Budapesztu" },
    { img: img05, desc: "Praga - zachód słońca" },
    { img: img06, desc: "Tihany - Węgry" },
    { img: img07, desc: "Wiedeń - jarmarki świąteczne" },
    { img: img08, desc: "Wilno - kościół św. Anny" },
    { img: img09, desc: "Troki - Litwa" },
    { img: img10, desc: "Skalne miasto - Czechy" },
    { img: img11, desc: "Skalne miasto - Czechy" },
    { img: img12, desc: "Skalne miasto - Czechy" },
    { img: img13, desc: "Paryż" },
    { img: img14, desc: "Polskie morze" },
  ];

  return (
    <SubSectionContainer preventLoadingEffect={true}>
      <Gallery imgList={list} />
    </SubSectionContainer>
  );
};

export default OthersGallery;
