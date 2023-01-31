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
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  html{
  font-size: 62.5%;
  }

  body {
    font-family: "Pretendard1";
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

  button{
    word-break: keep-all;
    cursor: pointer;
  }
`;

export default GlobalStyle;
