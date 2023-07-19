import React from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSales } = useGetOnSaleQuery()
  const { data: soonGame, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        title="Promoções"
        background="gray"
        games={onSaleGames}
        id="on-sales"
        isLoading={isLoadingSales}
      />
      <ProductList
        title="Em breve"
        background="black"
        games={soonGame}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
