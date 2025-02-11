import React from 'react'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeatureGameQuery } from '../../services/api'

import { parseToBrl } from '../../utils'
import * as S from './styles'
const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.discount)}</span>
            <br /> por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveita
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
