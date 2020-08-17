import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,button,input {
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: var(--color-primary);
        width: 90vw;
        max-width: 700px;
    }

    :root {
        height: 100vh;
        display: flex;
        justify-content: center;
        --color-primary: #fff;
        --color-secundary: #494949;
        --color-card-text: #1A2F41;
        --color-border: #c3c3c3;
        --color-price: #3498DB;
        --color-comment: #95a5a6;
        --color-title: #888;
    }

`;