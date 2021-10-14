import React, { forwardRef } from "react";
import * as P from "./parts";

export type Positions =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

export interface TriangleProps {
  position: Positions;
  color: string;
}

/**
 * functional React component - renders triangle shape
 */
const Triangle = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<TriangleProps>
>(({ color, position }, ref) => {
  let style;

  switch (position) {
    case "bottom-left":
      style = {
        bottom: 0,
        left: 0,
        borderBottom: `18vw solid ${color}`,
        borderRight: `27vw solid transparent`,
      };
      break;

    case "top-right":
      style = {
        top: 0,
        right: 0,
        borderTop: `12vw solid ${color}`,
        borderLeft: `20vw solid transparent`,
      };
      break;

    case "top-left":
      style = {
        top: 0,
        left: 0,
        borderTop: `18vw solid ${color}`,
        borderRight: `27vw solid transparent`,
      };
      break;

    default:
      style = {
        bottom: 0,
        right: 0,
        borderBottom: `18vw solid ${color}`,
        borderLeft: `27vw solid transparent`,
      };
  }

  return <P.Shape style={style} ref={ref} />;
});

export default Triangle;
