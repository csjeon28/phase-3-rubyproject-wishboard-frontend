import React from 'react'
// import LogUser from './LogUser'
import { useHistory } from 'react-router'

const Home = () => {

    const { push } = useHistory()

    return (
        <div>
            <header className='home'>
                <h1>My WishBoard</h1>
                <div className='home-row'>
                    {/* <LogUser /> */}
                    <button onClick={() => push('/loguser')}>Enter</button>
                </div>
            </header>
        </div>
    )
}

export default Home