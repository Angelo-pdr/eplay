import React from 'react'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../asserts/images/resident.png'
import fifa_23 from '../../asserts/images/fifa_23.png'
import star_wars from '../../asserts/images/star_wars.png'
import zelda from '../../asserts/images/zelda.png'
import diablo from '../../asserts/images/diablo.png'

const rpg: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['05/04'],
    image: `${diablo}`
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['05/04'],
    image: `${diablo}`
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: `${zelda}`
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: `${zelda}`
  }
]

const aventura: Game[] = [
  {
    id: 1,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: `${star_wars}`
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: `${star_wars}`
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: `${star_wars}`
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: `${star_wars}`
  },
]

const esporte: Game[] = [
  {
    id: 1,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    image: `${fifa_23}`
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    image: `${fifa_23}`
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    image: `${fifa_23}`
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    image: `${fifa_23}`
  }
]
const acao: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: `${resident}`
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: `${resident}`
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: `${resident}`
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    image: `${resident}`
  },

]

const Categories = () => (
  <>
    <ProductList title="RPG" background="gray" games={rpg} />
    <ProductList title="Aventura" background="black" games={aventura} />
    <ProductList title="Esporte" background="gray" games={esporte} />
    <ProductList title="Ação" background="black" games={acao} />
  </>
)

export default Categories
