import styled from "styled-components";

import SectionContainer from "../SectionContainer/SectionContainer";

const FooterSection = ({ isVisible }) => {
  return (
    <SectionContainer isVisible={isVisible}>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </SectionContainer>
  );
};

const Wrapper = styled.div``;

export default FooterSection;
