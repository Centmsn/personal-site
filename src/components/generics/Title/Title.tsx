import { TitleProps, TitleSize, TitleVariant } from "./constants";
import * as P from "./parts";

const Title = ({ as = "h1", size = TitleSize.m, variant = TitleVariant.black, children }: TitleProps) => {
  return (
    <P.StyledTitle as={as} size={size} variant={variant}>
      {children}
    </P.StyledTitle>
  );
};

export default Title;
