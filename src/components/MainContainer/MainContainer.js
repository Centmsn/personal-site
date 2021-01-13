import styled from "styled-components";

/**
 * A container for Section Components
 */
const MainContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MainContainer;
