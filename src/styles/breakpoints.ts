// size for media queries
const size = {
  mobileS: "320px",
  mobileL: "400px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1600px",
};

const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default breakpoints;
