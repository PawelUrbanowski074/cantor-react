import { createGlobalStyle } from "styled-components";
import background from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        line-height: 1.5;
        background-color: ${({ theme }) => theme.color.darksLateGray};
        background-image: url("${background}");
        background-position: center;
    }
`;