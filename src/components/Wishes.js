import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import EditWish from './EditWish'
// import Wish from './Wish'
import WishEdit from './WishEdit'

const Wishes = ({ logusername, editWishes }) => {
    // const { push } = useHistory()
    // const [wish, setWish] = useState([])
    const [wishes, setWishes] = useState([])

    // useEffect(() => {
    //     const fetchUsers = () => {
    //         fetch(`http://localhost:9292/wishes/search?q=${wishes}`)
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 setWish(data.wish)
    //                 setWishes(data.userWishes)
    //             })
    //     }
    //     fetchUsers()
    // }, [wishes])

    useEffect(() => {
        fetch('http://localhost:9292/wishes/')
            .then(response => response.json())
            .then(response => setWishes(response))
    }, [])

    console.log(wishes)

    // const updateWishes = (id) => {
    //     const updatedWishes = wish.filter(w => w.id !== id)
    //     setWishes(updatedWishes)
    // }

    return (
        <div className='wishes-list'>
            <h2>{logusername}</h2>
            <div>
                <WishEdit />
                {wishes.map((name, index) => (
                    <form className='wish-tile' key={index}>
                        {name.title}
                        <textarea>
                            {name.description}
                        </textarea>
                    </form>
                ))}
            </div>
            {/* <EditWish logusername={logusername} editWishes={editWishes} />
            <Wish wish={wish} /> */}
            {/* <Wish updateWishes={updateWishes} /> */}
        </div>
    )

}

export default Wishes