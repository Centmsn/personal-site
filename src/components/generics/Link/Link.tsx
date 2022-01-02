import { LinkProps } from "./constants";
import * as P from "./parts";

const Link = ({ external = false, to, light, underline = true, children, ...restProps }: LinkProps) => {
  if (external) {
    return (
      <P.StyledLink as="a" target="_blank" rel="noreferrer" href={to} light={light} {...restProps} underline>
        {children}
      </P.StyledLink>
    );
  }

  return (
    <P.StyledLink to={to} light={light} {...restProps} underline>
      {children}
    </P.StyledLink>
  );
};

export default Link;
