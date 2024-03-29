import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: '#F1F2F6',
  blue: '#1E90FF',
  green: '#2ED573',
  title: '#2F3542',
  text: '#747D8C',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
`
