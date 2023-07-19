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
  const { data: actionGame, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGame, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpgGame, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGame, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGame, isLoading: isLoadingSport } = useGetSportGamesQuery()

  return (
    <>
      <ProductList
        title="RPG"
        background="black"
        games={rpgGame}
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        title="Luta"
        background="gray"
        games={fightGame}
        isLoading={isLoadingFight}
        id="fight"
      />
      <ProductList
        title="Simulação"
        background="black"
        games={simulationGame}
        isLoading={isLoadingSimulation}
        id="simulation"
      />
      <ProductList
        title="Esporte"
        background="gray"
        games={sportGame}
        isLoading={isLoadingSport}
        id="sports"
      />
      <ProductList
        title="Ação"
        background="black"
        games={actionGame}
        isLoading={isLoadingAction}
        id="action"
      />
    </>
  )
}

export default Categories
