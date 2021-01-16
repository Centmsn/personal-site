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
  mobilesS: `(min-width: ${size.mobilesS})`,
  mobilesL: `(min-width: ${size.mobilesL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fonts.text};
    }

    html {
        font-size: 8px;

        @media ${device.mobilesL} {
            font-size: 9px;
        }

        @media ${device.tablet} {
            font-size: 11px;
        }

        @media ${device.laptop} {
            font-size: 12px;
        }

        @media ${device.laptopL} {
            font-size: 13px;
        }

        @media ${device.desktop} {
            font-size: 16px;
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
        text-shadow: 10px 10px 0 ${({ theme }) => theme.colors.gray};

        color: ${({ theme }) => theme.colors.yellow}
    }

    ul, ol {
        list-style: none;
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
