import { createGlobalStyle } from "styled-components";

// size for media queries
const size = {
  mobilesS: "320px",
  mobilesL: "400px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1600px",
};

export const device = {
  mobilesS: `(max-width: ${size.mobilesS})`,
  mobilesL: `(max-width: ${size.mobilesL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fonts.text};
    }

    html {

        @media ${device.desktop} {
            font-size: 16px;
        }

        @media ${device.laptopL} {
            font-size: 13px;
        }

        @media ${device.laptop} {
            font-size: 12px;
        }

        @media ${device.tablet} {
            font-size: 10px;
        }

        @media ${device.mobilesL} {
            font-size: 9px;
        }
    }

    body {
        max-width: 100vw;
        max-height: 100vh;

        overflow: hidden;
    }

    a {
        text-decoration-color: ${({ theme }) => theme.colors.yellow};
        color: black;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.title};
        text-shadow: 0.6rem 0.6rem 0 ${({ theme }) => theme.colors.gray};

        color: ${({ theme }) => theme.colors.yellow};
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    img {
        height: 100%;
    }

    button {
        border: none;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    small {
        display: block;

        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.gray};

    }

    input {
        background: none;

        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyles;
