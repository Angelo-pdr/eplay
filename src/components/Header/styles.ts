import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 1rem;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`
export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-left: 1rem;
  }
`
