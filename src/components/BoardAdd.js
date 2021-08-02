import React, { useCallback, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import WishAdd from './WishAdd'

const BoardAdd = () => {
    // const history = useHistory()
    // const { push } = useHistory()

    const [addBoard, setAddBoard] = useState(({ name: '' }))
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const fetchAddBoard = (addBoard) => {
        const postBoard = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify(addBoard)
        }
        fetch('http://localhost:9292/boards/', postBoard)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAddBoard(addBoard)
    }

    const handleInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setAddBoard({ ...addBoard, [name]: value })
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
                <button onClick={() => forceUpdate()} className='board-add-button'>Add</button>
            </form>
            <WishAdd />
        </div>
    )
}

export default BoardAdd
