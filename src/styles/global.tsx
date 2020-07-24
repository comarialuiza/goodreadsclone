import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
    }

    button {
        cursor: pointer;
    }

    body, html, #root {
        height: 100%;
    }

    body {
        font: 14px 'Catamaran', sans-serif;
    }
`;

export default GlobalStyles;