import { LinkProps, LinkVariant } from "./constants";
import * as P from "./parts";

const Link = ({ external = false, to, variant = LinkVariant.dark, underline, children, ...restProps }: LinkProps) => {
  if (external) {
    return (
      <P.StyledLink as="a" target="_blank" href={to} {...restProps} variant={variant} {...restProps} underline>
        {children}
      </P.StyledLink>
    );
  }

  return (
    <P.StyledLink to={to} variant={variant} {...restProps} underline>
      {children}
    </P.StyledLink>
  );
};

export default Link;
