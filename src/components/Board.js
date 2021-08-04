import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const Board = ({ setBoards, boards, username }) => {
    const { push } = useHistory()

    const [boardList, setBoardList] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/boards/')
    //         .then(resp => resp.json())
    //         .then(resp => {
    //             setBoardList(resp.data.board)
    //             console.log(resp.data.board)
    //         })
    // }, [])

    const handleDelete = () => {
        const deleteBoardReq = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        fetch('http://localhost:9292/boards/' + boards.id, deleteBoardReq)
        const newBoards = boardList.filter(b => {
            return b.id !== boards.id
        })
        setBoardList([...boards, newBoards])
    }

    return (
        <div className='board'>
            <h1>Wish Boards</h1>
            <div className='board-username'>
                <h3>User: {username}</h3>
                <button className='board-logout-button' onClick={() => push('/home')}>Log Out</button>
            </div>
            <div>
                <BoardAdd setBoards={setBoards} username={username} boards={boards} />
                {boards.map((board, index) => {
                    return (
                        <div
                            className='board-tile'
                            id={board.id}
                            key={index}>
                            {board.name}
                            <button onClick={handleDelete}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board
