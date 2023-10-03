"use client"
import { useState } from 'react'
import style from './gameList.module.css'
import { Game, GameList } from '@/models/Usuario'
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

const gameArray = new GameList()

const GamePage = () => {
    const [gameName, setGameName] = useState('');
    const [gameCategory, setGameCategory] = useState('');
    const [gamePrice, setGamePrice] = useState('');
    const [gameCreator, setGameCreator] = useState('');
    const [list, setList] = useState([])

    const [isCreating, setIsCreating] = useState(true);

    const cleanInputs = () => {
        setGameName('');
        setGameCategory('');
        setGamePrice('');
        setGameCreator('');
    }

    const addGame = () => {
        const newGame = new Game(gameName, gameCategory, gamePrice, gameCreator);
        gameArray.add(newGame)
        cleanInputs()
        console.log(gameArray.gameList);
    }

    const edit = (id) => {
        gameArray.gameList.map((game) => {
            if (game.id == id) {
                setGameName(game.nome)
                setGameCategory(game.categoria)
                setGamePrice(game.preco)
                setGameCreator(game.criador)
            }
        })

        setIsCreating(false);
    }

    const exclude = (id) => {
        gameArray.delete(id)
        console.log(gameArray.gameList);
    }

    const update = (id) => {
        this.gameList.map((game) => {
            if (game.id == id) {
                setGameName(gameName)
                setGameCategory(gameCategory)
                setGamePrice(gamePrice)
                setGameCreator(gameCreator)
            }
        })
    }

    return (
        <>
            <div className={style.hero}>
                <h1>Lista de Jogos</h1>
                <div className={style.input}>
                    <input className={style.inputElements} type="text" placeholder="Nome do jogo" value={gameName} onChange={e => { setGameName(e.target.value) }} />
                    <input className={style.inputElements} type="text" placeholder="Categoria do jogo" value={gameCategory} onChange={e => { setGameCategory(e.target.value) }} />
                    <input className={style.inputElements} type="text" placeholder="Preço do jogo" value={gamePrice} onChange={e => { setGamePrice(e.target.value) }} />
                    <input className={style.inputElements} type="text" placeholder="Criador do jogo" value={gameCreator} onChange={e => { setGameCreator(e.target.value) }} />

                    {
                        isCreating && (
                            <button className={style.inputElements} onClick={addGame}>Registrar</button>
                        )
                    }

                    {
                        !isCreating && (
                            <button className={style.inputElements} onClick={update}>Atualizar</button>
                        )
                    }

                </div>
                <div className={style.list}>
                    {
                        gameArray.gameList.map((game, index) => (
                            <div key={index} className={style.card}>
                                <h3><strong>Nome: </strong>{game.nome}</h3>
                                <p><strong>Categoria: </strong>{game.categoria}</p>
                                <p><strong>Preço: </strong>{game.preco}</p>
                                <p><strong>Criador: </strong>{game.criador}</p>
                                <div className={style.button}>
                                    <button className={style.btn} onClick={() => edit(game.id)} ><BsPencilFill /></button>
                                    <button className={style.btn} onClick={() => exclude(game.id)} ><BsFillTrashFill /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GamePage;