import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0px;
`
export const SectionTitulo = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  aling-items: center;
  margin-top: 1rem;
  font-size: 14px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
