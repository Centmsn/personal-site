import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import SubContainer from "components/generics/SubContainer/SubContainer";
import * as P from "./parts";

const HobbiesSport = () => {
  return (
    <SubContainer>
      <P.Main>
        <span>Sekcja w budowie</span> <FontAwesomeIcon icon={faPencilRuler} />
        <span>Za utrudnienia przepraszam</span>
      </P.Main>
    </SubContainer>
  );
};

export default HobbiesSport;
