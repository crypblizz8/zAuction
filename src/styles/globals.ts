import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-stretch: normal;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
  }

  ul,
  menu,
  dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  a,
  button {
   transition: opacity .3s;
  }

  a:hover,
  a:active,
  button:hover,
  button:active {
    opacity: .9;
  }

  img {
    max-width: 100%;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerColLeftAlign = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 50%;
`

export const ContainerColRightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
`

export const ContainerFlex = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerRow = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`

export default GlobalStyles