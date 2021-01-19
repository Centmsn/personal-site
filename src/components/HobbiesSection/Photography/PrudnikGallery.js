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

import styled from "styled-components";

import SubSectionContainer from "../SubSectionContainer";
import Gallery from "./Gallery";

const PrudnikGallery = () => {
  // TODO change descriptions
  const list = [
    { img: img01, desc: "Olsztyn" },
    { img: img02, desc: "Olsztyn - zachód słońca" },
    { img: img03, desc: "Bobolice - skały" },
    { img: img04, desc: "Zamek w Bobolicach" },
    { img: img05, desc: "Zamek w Bobolicach" },
    { img: img06, desc: "Zamek w Bobolicach" },
    { img: img07, desc: "Mirów / Bobolice" },
    { img: img08, desc: "Trojak" },
    { img: img09, desc: "Trojak - zachód" },
    { img: img10, desc: "Trojak - zachód" },
    { img: img11, desc: "Tatry zachodnie" },
    { img: img12, desc: "Tatry zachodnie - zima" },
    { img: img13, desc: "Tatry wysokie - zima" },
    { img: img14, desc: "Drogowskaz" },
    { img: img15, desc: "Giewont" },
  ];

  return (
    <SubSectionContainer preventLoadingEffect={true}>
      <Gallery imgList={list} />
    </SubSectionContainer>
  );
};

const Wrapper = styled.div``;

export default PrudnikGallery;
