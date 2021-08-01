import React, { useState, useEffect } from 'react'
import '../App.css'
import Draggable from 'react-draggable'
import { v4 as uuidv4 } from 'uuid'
var randomColor = require('randomcolor');

const WishAdd = () => {
    const [wish, setWish] = useState('')
    const [wishes, setWishes] = useState(JSON.parse(localStorage.getItem('wishes')) || [])

    const newwish = () => {
        if (wish.trim() !== "") {
            const newwish = {
                id: uuidv4(),
                wish: wish,
                color: randomColor({
                    luminosity: "light",
                }),
                defaultPos: { x: 100, y: 0 },
            };
            setWishes((wishes) => [...wishes, newwish])
            setWish('');
        } else {
            //   alert("Enter a item");
            setWish('')
        }
    }

    const keyPress = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            newwish()
        }
    }

    useEffect(() => {
        localStorage.setItem('wishes', JSON.stringify(wishes))
    }, [wishes])

    const updatePos = (data, index) => {
        let newArr = [...wishes]
        newArr[index].defaultPos = { x: data.x, y: data.y }
        setWishes(newArr)
    }

    const deleteWish = (id) => {
        setWishes(wishes.filter((wish) => wish.id !== id))
    }

    return (
        <div className='wishadd'>
            <div className='newwish'>
                <input
                    className='new-wish-input'
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    placeholder='Write Your Wish'
                    onKeyPress={(e) => keyPress(e)}
                />
                <button className='new-wish-add-button' onClick={newwish}>+</button>
            </div>
            {wishes.map((wish, index) => {
                return (
                    <Draggable
                        key={wish.id}
                        defaultPosition={wish.defaultPos}
                        onStop={(e, data) => {
                            updatePos(data, index);
                        }}
                    >
                        <div style={{ backgroundColor: wish.color }} className='wish-add-form'>
                            {`${wish.wish}`}
                            <button className='wish-delete-button' onClick={(e) => deleteWish(wish.id)}>X</button>
                        </div>
                    </Draggable>
                )
            })}
        </div>
    )
}

export default WishAdd