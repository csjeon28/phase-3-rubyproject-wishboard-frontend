import React, { useState } from 'react'
// import React, { useCallback, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import WishAdd from './WishAdd'

const BoardAdd = ({ username, setBoards, boards }) => {
    // const history = useHistory()
    // const { push } = useHistory()

    const [boardName, setBoardName] = useState('')
    // const [, updateState] = useState()
    // const forceUpdate = useCallback(() => updateState({}), [])

    const fetchAddBoard = (boardName) => {
        const postBoard = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify({ name: boardName, username: username })
        }
        fetch('http://localhost:9292/boards/', postBoard)
            .then(resp => resp.json())
            .then(resp => setBoards([...boards, resp]))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAddBoard(boardName)
    }

    const handleInput = (e) => {
        e.preventDefault()
        setBoardName(e.target.value)
    }

    return (
        <div className='boardadd'>
            <form onSubmit={handleSubmit}>
                <input
                    className='new-board-input'
                    onChange={handleInput}
                    name='name'
                    type='text'
                    placeholder='Enter Board Title'
                />
                <button className='board-add-button'>Add</button>
                {/* <button onClick={() => forceUpdate()} className='board-add-button'>Add</button> */}
            </form>
            <WishAdd />
        </div>
    )
}

export default BoardAdd
