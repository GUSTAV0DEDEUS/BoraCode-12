import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
  font-size: 62.5%;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased !important;  

  ---bg-color: #FBFAFF;

  /* font colors */
  ---purple: #7C3AED;
  ---purple-light: #E2D6FF;
  ---white: #FFF;
  ---black: #403937;
  ---black-light: #756966;
  /* icon color */
  ---icon-color: #C7C7CD;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    background: var(---bg-color );
  }

  ul{
    list-style: none;
  }
`;