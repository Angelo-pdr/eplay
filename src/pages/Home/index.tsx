import React from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGame } = useGetSoonQuery()

  if (!onSaleGames || !soonGame) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Banner />
      <ProductList
        title="Promoções"
        background="gray"
        games={onSaleGames}
        id="on-sales"
      />
      <ProductList
        title="Em breve"
        background="black"
        games={soonGame}
        id="coming-soon"
      />
    </>
  )
}

export default Home
