import React from 'react'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import { ButtonContainer } from '../Button/styles'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && <span>{formataPreco(game.prices.old)}</span>}
          {game.prices.current && <> por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <ButtonContainer
            variant="primary"
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
          >
            Adicionar ao carrinho
          </ButtonContainer>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
