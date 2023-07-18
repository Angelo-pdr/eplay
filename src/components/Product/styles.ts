import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Card = styled(Link)`
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
