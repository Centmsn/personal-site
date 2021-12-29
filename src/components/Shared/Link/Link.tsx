import { LinkProps, LinkVariant } from "./constants";
import * as P from "./parts";

const Link = ({ external = false, to, variant = LinkVariant.dark, underline, children }: LinkProps) => {
  if (external) {
    return (
      <P.StyledLink as="a" href={to}>
        {children}
      </P.StyledLink>
    );
  }

  return <P.StyledLink to={to}>{children}</P.StyledLink>;
};

export default Link;
