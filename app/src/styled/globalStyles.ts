import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    font-family: Arial, sans-serif;
    text-align: center;
    font-size: 11px;
    color: #757575;
    }

    * {
    box-sizing: border-box;
    }

    ::selection {
    background-color: rgb(42, 65, 81);
    color: white;
    }
`;

export default GlobalStyle;
