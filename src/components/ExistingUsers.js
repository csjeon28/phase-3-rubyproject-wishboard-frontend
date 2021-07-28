import React, { useEffect, useState } from 'react'

const ExistingUsers = ({ username }) => {

    const [userlist, setUserlist] = useState([])

    // useEffect(() => getExistingUsernames(), [])

    // const getExistingUsernames = () => {
    //     const fetchExistingUsernames = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' }
    //     }
    //     fetch('http://localhost:9292/users', fetchExistingUsernames)
    //         .then(resp => resp.json())
    //         .then(resp => setUserlist(resp.data))
    // }

    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then(response => response.json())
            .then(response => setUserlist(response))
    }, [])

    return (
        <div>
            <div className='existing-users-list'>
                {userlist.map((name, index) => (
                    <div key={index}>
                        {name.username}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExistingUsers