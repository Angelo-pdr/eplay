import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductsList'

import { Game } from '../Home'

const Categories = () => {
  const [gameAcao,setGameAcao] = useState<Game[]>([])
  const [gameEsporte,setGameEsporte] = useState<Game[]>([])
  const [gameSimulacao,setGameSimulacao] = useState<Game[]>([])
  const [gameRpg,setGameRpg] = useState<Game[]>([])
  const [gameLuta,setGameLuta] = useState<Game[]>([])

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/acao")
    .then((response) => response.json())
    .then(res => setGameAcao(res))

    fetch("https://fake-api-tau.vercel.app/api/eplay/esportes")
    .then((response) => response.json())
    .then(res => setGameEsporte(res))

    fetch("https://fake-api-tau.vercel.app/api/eplay/simulacao")
    .then((response) => response.json())
    .then(res => setGameSimulacao(res))

    fetch("https://fake-api-tau.vercel.app/api/eplay/rpg")
    .then((response) => response.json())
    .then(res => setGameRpg(res))

    fetch("https://fake-api-tau.vercel.app/api/eplay/luta")
    .then((response) => response.json())
    .then(res => setGameLuta(res))

  }, [])

  return(
    <>
      <ProductList title="RPG" background="black" games={gameRpg} />
      <ProductList title="Luta" background="gray" games={gameLuta} />
      <ProductList title="Simulação" background="black" games={gameSimulacao} />
      <ProductList title="Esporte" background="gray" games={gameEsporte} />
      <ProductList title="Ação" background="black" games={gameAcao} />
    </>
  )
}

export default Categories
