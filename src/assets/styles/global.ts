import { createGlobalStyle } from 'styled-components'

import githubBackground from 'assets/images/github-bg.svg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
  }

  body, input, textarea, button {
    font: 400 16px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #f2f2fa url(${githubBackground}) no-repeat 70% top;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
  }

  button {
    cursor: pointer;
  }
`
