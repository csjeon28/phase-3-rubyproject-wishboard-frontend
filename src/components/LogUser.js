import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LogUser = ({ setUsername }) => {
    const history = useHistory()

    const [logusername, setLogusername] = useState('')
    const [submittedUser, setSubmittedUser] = useState({ username: '' })

    const fetchSubmittedUser = (submittedUser) => {
        const postUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
            body: JSON.stringify(submittedUser)
        }
        fetch('http://localhost:9292/users', postUser)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchSubmittedUser(submittedUser)
        setUsername(logusername)
        history.push('/boards/')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setLogusername(e.target.value)
        setSubmittedUser({ ...submittedUser, [e.target.name]: e.target.value })
    }

    return (
        <div className='loguser'>
            <form onSubmit={handleSubmit}>
                <h5>Please use at least 4 characters</h5>
                <input
                    className='loguser-input'
                    onChange={handleChange}
                    name='username'
                    type='text'
                    logusername='logusername'
                    placeholder='Enter Your Username'
                ></input>
                <button className='loguser-button' type='submit' disabled={logusername.length < 4} >Sign In</button>
            </form>
        </div>
    )
}

export default LogUser