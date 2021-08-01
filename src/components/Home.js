import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {

    const { push } = useHistory()

    return (
        <div>
            <header className='home'>
                <h1>My WishBoard</h1>
                <div className='home-row'>
                    <button onClick={() => push('/loguser')}>Enter</button>
                </div>
            </header>
        </div>
    )
}

export default Home