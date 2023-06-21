import React from 'react'
import BannerImg from "../../asserts/images/fundo_hogwarts.png"
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import { ButtonContainer } from '../Button/styles'
const Hero = () => (
  <Banner style={{ backgroundImage: `url(${BannerImg})`}}>
    <div className='container'>
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 290,90</span>
            por R$ 190,90
        </p>
        <ButtonContainer
          variant='primary'
         type='button'
         title='Clique aqui para adicionar este jogo ao carrinho' >
          Adicionar ao carrinho
        </ButtonContainer>
      </Infos>
    </div>
  </Banner>
)

export default Hero
