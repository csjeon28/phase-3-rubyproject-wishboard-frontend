import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import ExistingUsers from './ExistingUsers'

const LogUser = ({ setUsername }) => {
    // const history = useHistory()
    const { push } = useHistory()

    const [logusername, setLogusername] = useState('')
    const [existingUser, setExistingUser] = useState({ username: '' })

    const fetchExistingUser = (existingUser) => {
        const postUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify(existingUser)
        }
        fetch('http://localhost:9292/users', postUser)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchExistingUser(existingUser)
        setUsername(logusername)
        // history.push(`/users`)
    }

    const handleChange = (e) => {
        setLogusername(e.target.value)
        setExistingUser({ ...existingUser, [e.target.name]: e.target.value })
    }

    return (
        <div className='loguser'>
            <form onSubmit={handleSubmit}>
                <h3>Log-In to Your Wish Board</h3>
                <input
                    onChange={handleChange}
                    name='username'
                    type='text'
                    logusername='logusername'
                    placeholder='Enter Your Username'
                ></input>
                <button type='submit' onClick={() => push('/boards')}>Sign In</button>
                <ExistingUsers />
            </form>
            <div>
                <h3 className='loguser-create-account'>Create a new user?</h3>
                <Link to='/newuser'>Sign Up</Link>
            </div>
        </div>
    )
}

export default LogUser