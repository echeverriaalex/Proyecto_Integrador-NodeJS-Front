import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --bg-gradient: linear-gradient(to left,rgb(206, 127, 175), #b39fc2, #4c5187);
        --bg-dark: #171718;
        --bg-red: #bb2106;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        /*
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //background:rgb(23, 23, 24);
        //background: var(--bg-dark);
        //background: radial-gradient( #555555, #222222);
        */
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;

export const themePage = {

    dimensions: {
        maxWidth: '2000px',
        //padding: '0 20px',
        marginTop: '120px',
        marginTopMobile: '140px',
        width: '100%',
        minHeight: '90vh',
    },

    colors: {
        textWhite: '#fff',
        bgRed: '#bb2106',
        bgDark: '#171718',
        bgBlack: '#000',
        bgGradient: 'linear-gradient(to left,rgb(206, 127, 175), #b39fc2, #4c5187)',
    },

    fonts: {
        montserrat: 'Montserrat, sans-serif',
    }
};