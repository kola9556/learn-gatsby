import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 95px 85px 0 ;
        font-family: 'Ubuntu';
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Ubuntu';
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
