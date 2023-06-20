import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-styles: none;
  }

  body{
    background-color: ${cores.branca};
  }
  .con
  tainer{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Container = styled.div`

`

export default GlobalCss
