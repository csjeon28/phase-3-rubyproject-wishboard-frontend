import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const Board = ({ username }) => {
    const { push } = useHistory()

    const [boardList, setBoardList] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/boards/')
            .then(resp => resp.json())
            .then(resp => {
                setBoardList(resp.data.board)
            })
    }, [])

    return (
        <div className='board'>
            <h1>Wish Boards</h1>
            <div className='board-username'>
                <h3>User: {username}</h3>
                <button className='board-logout-button' onClick={() => push('/home')}>Log Out</button>
            </div>
            <div>
                <BoardAdd />
                {boardList.map((board, index) => {
                    return (
                        <div
                            className='board-tile'
                            key={index}>
                            {board.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board
