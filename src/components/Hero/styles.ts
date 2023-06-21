import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    height: 100%;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;

  h2{
    font-size: 32px;
  }

  P{
    margin: 16px 0px;
    font-size: 18px;
    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
