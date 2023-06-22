import React from 'react'

import diablo from '../../asserts/images/diablo.png'
import Section from '../../components/Section'
import { Items, Item } from './styles'

const Gallery = () => (
    <Section title='Galeria' background='black' >
      <Items>
        <Item>
          <img src={diablo} alt="" />
        </Item>
        <Item>
          <img src={diablo} alt="" />
        </Item>
        <Item>
          <img src={diablo} alt="" />
        </Item>
        <Item>
          <img src={diablo} alt="" />
        </Item>
      </Items>
    </Section>
)

export default Gallery
