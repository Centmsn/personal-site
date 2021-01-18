import styled from "styled-components";

import img01 from "../../../assets/mountains_gal_01.jpg";
import img02 from "../../../assets/mountains_gal_02.jpg";
import img03 from "../../../assets/mountains_gal_03.jpg";
import img04 from "../../../assets/mountains_gal_04.jpg";
import img05 from "../../../assets/mountains_gal_05.jpg";
import img06 from "../../../assets/mountains_gal_06.jpg";
import img07 from "../../../assets/mountains_gal_07.jpg";
import img08 from "../../../assets/mountains_gal_08.jpg";
import img09 from "../../../assets/mountains_gal_09.jpg";
import img10 from "../../../assets/mountains_gal_10.jpg";
import img11 from "../../../assets/mountains_gal_11.JPG";
import img12 from "../../../assets/mountains_gal_12.JPG";
import img13 from "../../../assets/mountains_gal_13.JPG";
import img14 from "../../../assets/mountains_gal_14.jpg";
import img15 from "../../../assets/mountains_gal_15.jpg";
import img16 from "../../../assets/mountains_gal_16.jpg";
import img17 from "../../../assets/mountains_gal_17.jpg";
import img18 from "../../../assets/mountains_gal_18.JPG";
import img19 from "../../../assets/mountains_gal_19.jpg";
import img20 from "../../../assets/mountains_gal_20.jpg";
import img21 from "../../../assets/mountains_gal_21.JPG";
import img22 from "../../../assets/mountains_gal_22.JPG";
import img23 from "../../../assets/mountains_gal_23.jpg";
import img24 from "../../../assets/mountains_gal_24.jpg";
import img25 from "../../../assets/mountains_gal_25.jpg";
import img26 from "../../../assets/mountains_gal_26.jpg";
import img27 from "../../../assets/mountains_gal_27.jpg";
import img28 from "../../../assets/mountains_gal_28.JPG";
import img29 from "../../../assets/mountains_gal_29.JPG";
import img30 from "../../../assets/mountains_gal_30.jpg";

import Gallery from "./Gallery";
import SubSectionContainer from "../SubSectionContainer";

const MountainsGallery = () => {
  const images = [
    { img: img01, desc: "testowy opis" },
    { img: img02, desc: "testowy opis" },
    { img: img03, desc: "testowy opis" },
    { img: img04, desc: "testowy opis" },
    { img: img05, desc: "testowy opis" },
    { img: img06, desc: "testowy opis" },
    { img: img07, desc: "testowy opis" },
    { img: img08, desc: "testowy opis" },
    { img: img09, desc: "testowy opis" },
    { img: img10, desc: "testowy opis" },
    { img: img11, desc: "testowy opis" },
    { img: img12, desc: "testowy opis" },
    { img: img13, desc: "testowy opis" },
    { img: img14, desc: "testowy opis" },
    { img: img15, desc: "testowy opis" },
    { img: img16, desc: "testowy opis" },
    { img: img17, desc: "testowy opis" },
    { img: img18, desc: "testowy opis" },
    { img: img19, desc: "testowy opis" },
    { img: img20, desc: "testowy opis" },
    { img: img21, desc: "testowy opis" },
    { img: img22, desc: "testowy opis" },
    { img: img23, desc: "testowy opis" },
    { img: img24, desc: "testowy opis" },
    { img: img25, desc: "testowy opis" },
    { img: img27, desc: "testowy opis" },
    { img: img28, desc: "testowy opis" },
    { img: img29, desc: "testowy opis" },
    { img: img30, desc: "testowy opis" },
  ];
  return (
    <SubSectionContainer preventLoadingEffect={true}>
      {/* <img src={img01} alt="" /> */}
      <Gallery imgList={images}></Gallery>
    </SubSectionContainer>
  );
};

export default MountainsGallery;
