"use client"
import { useState } from 'react'
import style from './gameList.module.css'
import { Game, GameList } from '@/models/Usuario'

const GamePage = () => {
    const gameArray = new GameList()
    const [gameName, setGameName] = useState('')
    const [gameGender, setGameGender] = useState('')
    const [gamePrice, setGamePrice] = useState('')
    const [gameCriator, setGameCriator] = useState('')
    const [gameList, setGameList] = useState(gameArray.gameList);

    const addGame = () => {
        const newGame = new Game(gameName);
        gameArray.add(newGame)
    }

    return (
        <>
            <div className={style.hero}>
                <h1>Lista de Jogos</h1>
                <div className={style.input}>
                <input type="text" placeholder="Nome do jogo" value={gameName} onChange={(e) => setGameName(e.target.value)} />
                <input type="text" placeholder="Gênero do jogo" value={gameGender} onChange={(e) => setGameGender(e.target.value)} />
                <input type="text" placeholder="Preço do jogo" value={gamePrice} onChange={(e) => setGamePrice(e.target.value)} />
                <input type="text" placeholder="Criador do jogo" value={gameCriator} onChange={(e) => setGameCriator(e.target.value)} />
                <button onClick={addGame}>Registrar</button>
                </div>
            </div>
        </>
    )
}

export default GamePage