import React from 'react'
import NewUser from './NewUser'

const Home = () => {

    return (
        <div>
            <header className='home-container'>
                <h1>My Wish Board</h1>
                <div className='home-flex-row'>
                    <div className='home-flex-large'>
                        <h2>New User</h2>
                        <NewUser />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home