import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


const NewUser = () => {
    const { push } = useHistory()
    const [postNewUser, setPostNewUser] = useState({ username: '' })

    const fetchNewUser = (postNewUser) => {
        const postUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify(postNewUser)
        }
        fetch('http://localhost:9292/users', postUser)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchNewUser(postNewUser)
        setPostNewUser({ username: '' })
        e.target.reset()
    }

    const handleChange = (e) => {
        setPostNewUser({ ...postNewUser, [e.target.name]: e.target.value })
    }

    return (
        <div className='newuser'>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Create a New Username'
                ></input>
                <button type='submit' onClick={() => push('/boards')}>Create User</button>
            </form>
            <div>
                <h2 className='newuser-account'>Already signed up?</h2>
                <Link to='/loguser'>Sign in</Link>
            </div>
        </div >
    )
}

export default NewUser