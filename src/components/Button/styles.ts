import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.black)};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.black : colors.green};
  color: ${colors.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  borde-radius: 8px;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  background-color: tranparent;
  color: ${colors.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  text-decoration: none;
`
