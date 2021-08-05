import React, { useState } from 'react'
import WishAdd from './WishAdd'

const BoardAdd = ({ username, setBoards, boards }) => {

    const [boardName, setBoardName] = useState('')

    const fetchAddBoard = (boardName) => {
        const postBoard = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify({ name: boardName, username: username })
        }
        fetch('http://localhost:9292/boards/', postBoard)
            .then(resp => resp.json())
            .then(resp => setBoards([...boards, resp.board]))
            // .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAddBoard(boardName)
    }

    const handleInput = (e) => {
        setBoardName(e.target.value)
    }

    return (
        <div className='boardadd'>
            <form onSubmit={handleSubmit}>
                <input
                    className='new-board-input'
                    onInput={handleInput}
                    name='name'
                    type='text'
                    value={boardName}
                    placeholder='Enter Board Title'
                />

                <button type='submit' className='board-add-button'>Add</button>
            </form>
            <WishAdd />
        </div>
    )
}

export default BoardAdd
