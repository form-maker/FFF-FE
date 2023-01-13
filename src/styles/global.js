import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "netmarbleB";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleB.woff")
        format("woff");

    }
       @font-face {
      font-family: "netmarbleM";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleM.woff")
        format("woff");

    }
           @font-face {
      font-family: "netmarbleL";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleL.woff")
        format("woff");

    }
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html{
  font-size: 62.5%;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: white;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    width:100%;
  }
  
  div{
    box-sizing: border-box;
    margin: 0;
  }

  input{
     &:focus {
      outline: none;
    }
  }

  textarea{
     &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
