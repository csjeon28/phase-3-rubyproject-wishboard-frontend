import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LogUser = ({ setUsername }) => {
    const history = useHistory()

    const [logusername, setLogusername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(logusername)
        history.push(`/users`)
    }

    const handleChange = (e) => {
        setLogusername(e.target.value)
    }

    return (
        <div className='loguser'>
            <form onSubmit={handleSubmit}>
                <label>Sign-in</label>
                <input
                    onChange={handleChange}
                    name='username'
                    type='text'
                    logusername='logusername'
                    placeholder='Enter Username'
                ></input>
                <button type='submit'>Log User</button>
            </form>
        </div>
    )
}

export default LogUser