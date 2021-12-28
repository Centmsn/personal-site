import { createGlobalStyle } from "styled-components";
import breakpoints from "styles/breakpoints";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fonts.text};
    }

    html {

        @media ${breakpoints.desktop} {
            font-size: 16px;
        }

        @media ${breakpoints.laptopL} {
            font-size: 13px;
        }

        @media ${breakpoints.laptop} {
            font-size: 12px;
        }

        @media ${breakpoints.tablet} {
            font-size: 10px;
        }

        @media ${breakpoints.mobileL} {
            font-size: 9px;
        }
    }

    body {
        width: 100vw;
        max-width: 1920px;

        height: 100vh;
        max-height: 1080px;

        overflow: hidden;


    }

    ::-webkit-scrollbar {
        width: 1em;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.yellow};
        outline: 1px solid ${({ theme }) => theme.colors.lightGray};
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

    hr {
        border: 1px solid ${({ theme }) => theme.colors.lightGray};
        background-color: ${({ theme }) => theme.colors.gray};
        margin: 10px 0;
    }
`;

export default GlobalStyles;
