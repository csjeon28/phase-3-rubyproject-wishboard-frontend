import React from 'react'
// import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const Board = ({ setBoards, boards, username }) => {
    const { push } = useHistory()

    const deleteBoard = (id) => {
        const deleteSelectedBoard = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        fetch('http://localhost:9292/boards/' + id, deleteSelectedBoard)
            .then(resp => resp.json())
            .then(resp => {
                setBoards(boards.filter(b => b.id !== id))
            })
    }

    return (
        <div className='board'>
            <h1>Wish Boards</h1>
            <div className='board-username'>
                <h3>User: {username}</h3>
                <button className='board-logout-button' onClick={() => push('/home')}>Log Out</button>
            </div>
            <div>
                <BoardAdd setBoards={setBoards} username={username} boards={boards} />
                {boards.map((board, index) => {
                    return (
                        <div
                            className='board-tile'
                            id={board.id}
                            key={index}>
                            {board.name}
                            <button onClick={() => deleteBoard(board.id)}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board
