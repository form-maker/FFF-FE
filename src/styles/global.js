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
    @font-face {
      font-family: 'Pretendard';
      font-weight: 900;
      font-display: swap;
      src: local('Pretendard Black'), url('./woff2/Pretendard-Black.woff2') format('woff2'), url('./woff/Pretendard-Black.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      font-display: swap;
      src: local('Pretendard ExtraBold'), url('./woff2/Pretendard-ExtraBold.woff2') format('woff2'), url('./woff/Pretendard-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      font-display: swap;
      src: local('Pretendard Bold'), url('./woff2/Pretendard-Bold.woff2') format('woff2'), url('./woff/Pretendard-Bold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 600;
      font-display: swap;
      src: local('Pretendard SemiBold'), url('./woff2/Pretendard-SemiBold.woff2') format('woff2'), url('./woff/Pretendard-SemiBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 500;
      font-display: swap;
      src: local('Pretendard Medium'), url('./woff2/Pretendard-Medium.woff2') format('woff2'), url('./woff/Pretendard-Medium.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      font-display: swap;
      src: local('Pretendard Regular'), url('./woff2/Pretendard-Regular.woff2') format('woff2'), url('./woff/Pretendard-Regular.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 300;
      font-display: swap;
      src: local('Pretendard Light'), url('./woff2/Pretendard-Light.woff2') format('woff2'), url('./woff/Pretendard-Light.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 200;
      font-display: swap;
      src: local('Pretendard ExtraLight'), url('./woff2/Pretendard-ExtraLight.woff2') format('woff2'), url('./woff/Pretendard-ExtraLight.woff') format('woff');
    }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url('./woff2/Pretendard-Thin.woff2') format('woff2'), url('./woff/Pretendard-Thin.woff') format('woff');
  }

  html{
  font-size: 62.5%;
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
    cursor: pointer;
  }
`;

export default GlobalStyle;
