import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fonts.text};
    }

    body {
        max-width: 100vw;
        max-height: 100vh;

        overflow: hidden;
    }

    a {
        text-decoration: none;
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
`;

export default GlobalStyles;
