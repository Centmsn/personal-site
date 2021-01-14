import { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const positionEnum = {
  1: "bottom-right",
  2: "bottom-left",
  3: "top-right",
  4: "top-left",
};

/**
 * Component renders triangle shape
 */
const Triangle = forwardRef((props, ref) => {
  let style;
  if (props.position === positionEnum[2]) {
    style = {
      bottom: 0,
      left: 0,
      borderBottom: `18vw solid ${props.color}`,
      borderRight: `27vw solid transparent`,
    };
  } else if (props.position === positionEnum[3]) {
    style = {
      top: 0,
      right: 0,
      borderTop: `18vw solid ${props.color}`,
      borderLeft: `27vw solid transparent`,
    };
  } else if (props.position === positionEnum[4]) {
    style = {
      top: 0,
      left: 0,
      borderTop: `18vw solid ${props.color}`,
      borderRight: `27vw solid transparent`,
    };
  } else {
    style = {
      bottom: 0,
      right: 0,
      borderBottom: `18vw solid ${props.color}`,
      borderLeft: `27vw solid transparent`,
    };
  }

  return <Shape style={style} ref={ref} />;
});

Triangle.propTypes = {
  /**
   * triangle color - accepts all formats
   */
  color: PropTypes.string.isRequired,

  /**
   * allows to place triangle in the corners of the screen
   */
  position: PropTypes.oneOf([
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
  ]).isRequired,
};

const Shape = styled.div`
  position: absolute;

  width: 0;
  height: 0;
`;

export default Triangle;
