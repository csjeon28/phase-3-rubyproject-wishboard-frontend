import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const Board = ({ username }) => {
    const { push } = useHistory()

    const [boardList, setBoardList] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/boards/')
            .then(response => response.json())
            .then(response => setBoardList(response.data.board))
    }, [])

    // const [boardname, setBoardname] = useState('')
    // const [boards, setBoards] = useState({})

    // useEffect(() => {
    //     const fetchBoards = () => {
    //         fetch('http://localhost:9292/boards')
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 setBoardList(data)
    //                 setBoards(data.board)
    //             })
    //     }
    //     fetchBoards()
    // }, [boardname])

    return (
        <div className='board'>
            <h1>My Wish Boards</h1>
            <h3>User: {username}</h3>
            <div>
                <BoardAdd />
                {boardList.map((board, index) => {
                    return (
                        <button
                            onClick={() => push('/wishes')}
                            className='board-tile'
                            type='button'
                            key={index}>
                            {board.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Board
