import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: Arial, sans-serif;
        text-align: center;
        font-size: 11px;
        color: #757575;
    }

    body {
        margin: 0;
        padding: 5em 0 15em;
    }

    * {
        box-sizing: border-box;
    }

    ::selection {
        background-color: rgb(0, 73, 123);
        color: white;
    }
`;

export default GlobalStyle;
