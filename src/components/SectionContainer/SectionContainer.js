import styled from "styled-components";

const SectionContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export default SectionContainer;
