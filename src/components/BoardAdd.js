import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const BoardAdd = () => {
    // const history = useHistory()
    // const { push } = useHistory()

    // const [logBoard, setLogBoard] = useState('')
    const [addBoard, setAddBoard] = useState(({ name: '' }))

    const fetchAddBoard = (addBoard) => {
        const postBoard = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify(addBoard)
        }
        fetch('http://localhost:9292/boards', postBoard)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
    console.log(addBoard)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAddBoard(addBoard)
        // setLogBoard(logBoard)
        // history.push(`/boards`)
    }

    const handleInput = (e) => {
        // setLogBoard(e.target.value)
        // e.preventDefault()
        const { name, value } = e.target
        setAddBoard({ ...addBoard, [name]: value })
    }

    return (
        <div className='boardadd'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInput}
                    name='name'
                    type='text'
                    placeholder='Enter Title'
                />
                <button className='board-add-button'>Add</button>
            </form>
        </div>
    )
}

export default BoardAdd