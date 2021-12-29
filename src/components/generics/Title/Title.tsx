import { TitleProps, TitleSize, TitleVariant } from "./constants";
import * as P from "./parts";

const Title = ({
  as = "h1",
  align = "center",
  size = TitleSize.m,
  variant = TitleVariant.black,
  children,
}: TitleProps) => {
  return (
    <P.StyledTitle as={as} size={size} variant={variant} align={align}>
      {children}
    </P.StyledTitle>
  );
};

export default Title;
