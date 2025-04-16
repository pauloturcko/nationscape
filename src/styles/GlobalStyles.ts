import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input {
      all: unset;
      box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.body};
        background-color: ${({ theme }) => theme.colors.background};
        display: flex;
        height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
    };
`;

export default GlobalStyles;
