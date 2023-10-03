"use client"
import { useState } from 'react'
import style from './gameList.module.css'
import { Game, GameList } from '@/models/Usuario'

const GamePage = () => {
    const gameArray = new GameList()
    const [gameName, setGameName] = useState('');
    const [gameCategory, setGameCategory] = useState('');
    const [gamePrice, setGamePrice] = useState('');
    const [gameCreator, setGameCreator] = useState('');

    const addGame = () => {
        const newGame = new Game(gameName, gameCategory, gamePrice, gameCreator);
        gameArray.add(newGame)
    }

    return (
        <>
            <div className={style.hero}>
                <h1>Lista de Jogos</h1>
                <div className={style.input}>
                    <input type="text" placeholder="Nome do jogo" value={gameName} onChange={e => { setGameName(e.target.value) }} />
                    <input type="text" placeholder="Categoria do jogo" value={gameCategory} onChange={e => { setGameCategory(e.target.value) }} />
                    <input type="text" placeholder="Preço do jogo" value={gamePrice} onChange={e => { setGamePrice(e.target.value) }} />
                    <input type="text" placeholder="Criador do jogo" value={gameCreator} onChange={e => { setGameCreator(e.target.value) }} />
                    <button onClick={addGame}>Registrar</button>
                </div>
            </div>
        </>
    )
}

export default GamePage