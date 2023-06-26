import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}


export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices:{
    discount?: number
    old?: number
    current?: number
  }
  details : {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media : {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setpromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/promocoes")
    .then((response) => response.json())
    .then(res => setpromocoes(res))
    fetch("https://fake-api-tau.vercel.app/api/eplay/em-breve")
    .then((response) => response.json())
    .then(res => setEmBreve(res))
  }, [])

  return(
    <>
      <Banner />
      <ProductList title="Promoções" background="gray" games={promocoes} />
      <ProductList title="Em breve" background="black" games={emBreve} />
    </>
  )
}

export default Home
