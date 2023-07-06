import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaClaro: '#a3a3a3'
}

export const breakpoints = {
  desktop:'1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style-type: none;
  }

  body{
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Container = styled.div``

export default GlobalCss
