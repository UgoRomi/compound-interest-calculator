import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2D2D2D;
    --white: #FFFFFF;
    --blue: #003049;
    --red: #D62828;
    --orange: #F77F00;
    --yellow: #FCBF49;
    --light-yellow: #EAE2B7;
  }

  html {
    font-size: 10px;
    background-color: var(--blue);
    font-family: "Fira Sans", sans-serif;
    color: var(--white);
	  letter-spacing: 2px;
	  line-height: 4em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  h1 {
	  font-size: 3rem;
	  font-weight: bold;
  }

  body {
    min-height: 100vh;
    margin: 2rem 2rem 0;
  	font-size: 2rem;
  }
`

export default GlobalStyles
