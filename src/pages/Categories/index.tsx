import React from 'react'
import ProductList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGame } = useGetActionGamesQuery()
  const { data: fightGame } = useGetFightGamesQuery()
  const { data: rpgGame } = useGetRpgGamesQuery()
  const { data: simulationGame } = useGetSimulationGamesQuery()
  const { data: sportGame } = useGetSportGamesQuery()

  if (actionGame && fightGame && rpgGame && simulationGame && sportGame) {
    return (
      <>
        <ProductList title="RPG" background="black" games={rpgGame} />
        <ProductList title="Luta" background="gray" games={fightGame} />
        <ProductList
          title="Simulação"
          background="black"
          games={simulationGame}
        />
        <ProductList title="Esporte" background="gray" games={sportGame} />
        <ProductList title="Ação" background="black" games={actionGame} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
