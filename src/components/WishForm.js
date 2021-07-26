import React, { Component } from 'react'
import axios from 'axios'

class WishForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.wish.title,
            description: this.props.wish.description
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = () => {
        const wish = { title: this.state.title, description: this.state.description }
        axios.put(
            `http://localhost:9292/wishes/${this.props.wish.id}`,
            { wish: wish }
        )
            .then(response => {
                console.log(response)
                this.props.updateWish(response.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text" name="title" placeholder='Your Wish Title'
                        value={this.state.title} onChange={this.handleInput}
                        ref={this.props.titleRef} />
                    <textarea className='input' name="description" placeholder='Describe Your Wish'
                        value={this.state.description} onChange={this.handleInput}></textarea>
                </form>
            </div>
        )
    }
}

export default WishForm