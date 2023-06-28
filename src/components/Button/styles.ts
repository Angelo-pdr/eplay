import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.verde};
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
