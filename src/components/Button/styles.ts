import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: tranparent;
  color: ${cores.branca};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  borde-radius: 8px;
  display: inline-block;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  background-color: tranparent;
  color: ${cores.branca};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  text-decoration: none;
`
