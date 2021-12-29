import { ExtendtedTextProps, TextSize } from "./constants";
import * as P from "./parts";

const Text = ({ as = "p", bold, important, light = false, size = TextSize.regular, children }: ExtendtedTextProps) => {
  return (
    <P.StyledText as={as} bold={bold} size={size} important={important} light={light}>
      {children}
    </P.StyledText>
  );
};

export default Text;
