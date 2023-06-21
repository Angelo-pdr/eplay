import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 1rem;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 1rem;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
