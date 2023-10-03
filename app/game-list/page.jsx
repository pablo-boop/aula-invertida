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
                    <input  className={style.inputElements} type="text" placeholder="Nome do jogo" value={gameName} onChange={e => { setGameName(e.target.value) }} />
                    <input  className={style.inputElements} type="text" placeholder="Categoria do jogo" value={gameCategory} onChange={e => { setGameCategory(e.target.value) }} />
                    <input  className={style.inputElements} type="text" placeholder="Preço do jogo" value={gamePrice} onChange={e => { setGamePrice(e.target.value) }} />
                    <input  className={style.inputElements} type="text" placeholder="Criador do jogo" value={gameCreator} onChange={e => { setGameCreator(e.target.value) }} />
                    <button className={style.inputElements}  onClick={addGame}>Registrar</button>
                </div>
                <div className={style.list}>
                    {
                        gameArray.gameList.map((game, index) => (
                            <div key={index}>
                            <h3><strong>Nome: </strong>{game.nome}</h3>
                                <p><strong>Categoria: </strong>{game.categoria}</p>
                                <p><strong>Preço: </strong>{game.preco}</p>
                                <p><strong>Criador: </strong>{game.criador}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GamePage;