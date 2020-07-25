import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        --primaryColor: #86bcb6;
    }

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
        font: 14px #333 'Catamaran', sans-serif;
    }
`;

export default GlobalStyles;