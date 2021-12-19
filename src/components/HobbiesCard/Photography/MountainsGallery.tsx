import img01 from "assets/mountains_gal_01.jpg";
import img02 from "assets/mountains_gal_02.jpg";
import img03 from "assets/mountains_gal_03.jpg";
import img04 from "assets/mountains_gal_04.jpg";
import img05 from "assets/mountains_gal_05.jpg";
import img06 from "assets/mountains_gal_06.jpg";
import img07 from "assets/mountains_gal_07.jpg";
import img08 from "assets/mountains_gal_08.jpg";
import img09 from "assets/mountains_gal_09.jpg";
import img10 from "assets/mountains_gal_10.jpg";
import img11 from "assets/mountains_gal_11.jpg";
import img12 from "assets/mountains_gal_12.JPG";
import img13 from "assets/mountains_gal_13.JPG";
import img14 from "assets/mountains_gal_14.JPG";
import img15 from "assets/mountains_gal_15.jpg";
import img16 from "assets/mountains_gal_16.jpg";
import img17 from "assets/mountains_gal_17.jpg";
import img18 from "assets/mountains_gal_18.jpg";
import img19 from "assets/mountains_gal_19.JPG";
import img20 from "assets/mountains_gal_20.jpg";
import img21 from "assets/mountains_gal_21.jpg";
import img22 from "assets/mountains_gal_22.JPG";
import img23 from "assets/mountains_gal_23.JPG";
import img24 from "assets/mountains_gal_24.jpg";
import img25 from "assets/mountains_gal_25.jpg";
import img26 from "assets/mountains_gal_26.jpg";
import img27 from "assets/mountains_gal_27.jpg";
import img28 from "assets/mountains_gal_28.JPG";
import img29 from "assets/mountains_gal_29.JPG";
import img30 from "assets/mountains_gal_30.jpg";
import { ImageObject } from "components/Shared/Gallery/Gallery";
import Gallery from "components/Shared/Gallery/Gallery";
import SubContainer from "components/Shared/SubContainer/SubContainer";

/**
 * functional React component - renders gallery of images
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const MountainsGallery = () => {
  const images: Array<ImageObject> = [
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
    { img: img16, desc: "Kozice" },
    { img: img17, desc: "Górski szlak" },
    { img: img18, desc: "Zachód słońca" },
    { img: img19, desc: "Kozica na szlaku" },
    { img: img20, desc: "Przełęcz Zawrat" },
    { img: img21, desc: "Boczań - Tatry" },
    { img: img22, desc: "Tatrzańskie granie" },
    { img: img23, desc: "Tatry Wysokie" },
    { img: img24, desc: "zejście ze szczytu" },
    { img: img25, desc: "Hala Gąsienicowa" },
    { img: img26, desc: "Zachód na grani" },
    { img: img27, desc: "panorama Tatr" },
    { img: img28, desc: "morze chmur" },
    { img: img29, desc: "morze chmur - zachód" },
    { img: img30, desc: "szczyt" },
  ];
  return (
    <SubContainer shouldPreventLoadingEffect={true}>
      <Gallery imgList={images}></Gallery>
    </SubContainer>
  );
};

export default MountainsGallery;
