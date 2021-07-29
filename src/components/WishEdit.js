import React, { useState } from 'react'


const WishEdit = ({ editWishes }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [newWishes, setNewWishes] = useState('')

    const handleClick = () => {
        fetch('http://localhost:9292/wishes/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
    }

    const handleDelete = (wish) => {
        fetch(`http://localhost:9292/wishes/'${wish.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        editWishes(wish.id)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setTitle({ ...title, [name]: value })
        setDescription({ ...description, [name]: value })
    }

    return (
        <div className='wish-tile'>
            <form onBlur={handleClick} >
                <input
                    className='input'
                    type='text'
                    name='title'
                    placeholder='Your Wish Title'
                    onChange={handleInput}
                />
                <textarea
                    className='input'
                    type='text'
                    name='description'
                    placeholder='Describe Your Wish'
                    onChange={handleInput}>
                </textarea>
                <div className='wish-add-delete'>
                    <button className='wish-add-button'>Add wish</button>
                    <button className='wish-delete-button' onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default WishEdit