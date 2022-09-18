import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'

import logo from './assets/logo.svg'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
import { useState, useEffect } from 'react'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'
import CreatedAtModal from './components/CreatedAtModal'


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(res => res.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black my-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
          {games.map(game => {
            return (
              <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
            )
          })}
      </div>

          <Dialog.Root>
            <CreateAdBanner/>   
            <CreatedAtModal/>         
          </Dialog.Root>

      
    </div>
  )
}

export default App
