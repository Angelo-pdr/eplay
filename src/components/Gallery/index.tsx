import React from 'react'

import spiderman from '../../asserts/images/banner-homem-aranha.png'
import hogwarts from '../../asserts/images/fundo_hogwarts.png'
import play from '../../asserts/images/botao-play.png'
import fechar from '../../asserts/images/close.png'
import zoom from '../../asserts/images/mais-zoom.png'
import Section from '../../components/Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem ) => {
    if(item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem ) => {
    if(item.type === 'image') return zoom
    return play
  }
  return(
   <>
    <Section title='Galeria' background='black' >
      <Items>
        {mock.map((media, index) => (
           <Item key={media.url}>
           <img src={getMediaCover(media)} alt={`Mídia${index + 1} de ${name}`} />
              <Action>
                <img src={getMediaIcon(media)} alt="clique aqui para maximar a mídia" />
              </Action>
            </Item>
        ))}
      </Items>
    </Section>
    <Modal>
      <ModalContent className='container'>
        <header>
          <h4>{name}</h4>
          <img src={fechar} alt="Ícone de fechar" />
        </header>
        <img src={spiderman} alt="" />
      </ModalContent>
      <div className='overlay'></div>
    </Modal>
   </>
  )
}

export default Gallery
