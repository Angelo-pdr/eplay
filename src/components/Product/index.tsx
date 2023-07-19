import React from 'react'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  description,
  image,
  infos,
  system,
  id
}: Props) => (
  <S.Card
    title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
    to={`/product/${id}`}
  >
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.Title>{title}</S.Title>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default Product
