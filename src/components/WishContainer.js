import React, { Component } from 'react'
import axios from 'axios'
import Wish from './Wish'
import WishForm from './WishForm'
import update from 'immutability-helper'
import Notification from './Notification'

class WishContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishes: [],
            editingWishId: null,
            notification: '',
            transitionIn: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9292/wishes', { params: { title: '', description: '' } })
            .then(response => { this.setState({ wishes: response.data }) })
    }

    addNewWish = () => {
        const newWish = { title: '', description: '' }
        axios.post('http://localhost:9292/wishes', newWish)
            .then(response => {
                const wishes = update(this.state.wishes, { $splice: [[0, 0, response.data]] })
                this.setState({ wishes: wishes, editingWishId: response.data.id })
            })
            .catch(error => console.log(error))
    }

    updateWish = (wish) => {
        const wishIndex = this.state.wishes.findIndex(x => x.id === wish.id)
        const wishes = update(this.state.wishes, { [wishIndex]: { $set: wish } })
        this.setState({ wishes: wishes, notification: 'All changes saved', transitionIn: true })
    }

    deleteWish = (id) => {
        axios.delete(`http://localhost:9292/wishes/${id}`)
            .then(response => {
                console.log(response)
                const wishIndex = this.state.wishes.findIndex(x => x.id === id)
                const wishes = update(this.state.wishes, { $splice: [[wishIndex, 1]] })
                this.setState({ wishes: wishes })
            })
            .catch(error => console.log(error))
    }

    resetNotification = () => { this.setState({ notification: '', transitionIn: false }) }

    enableEdit = (id) => {
        this.setState({ editingWishId: id }, () => { this.title.focus() })
    }

    render() {
        return (
            <div>
                <div>
                    <button className="newWishButton" onClick={this.addNewWish}>New Wish</button>
                    <Notification in={this.state.transitionIn} notification={this.state.notification} />
                </div>
                <div>
                    {this.state.wishes.map((wish) => {
                        if (this.state.editingWishId === wish.id) {
                            return (
                                <WishForm
                                    wish={wish}
                                    key={wish.id}
                                    updateWish={this.updateWish}
                                    titleRef={input => this.title = input}
                                    resetNotification={this.resetNotification} />)
                        } else {
                            return (
                                <Wish
                                    wish={wish}
                                    key={wish.id}
                                    onClick={this.enableEdit}
                                    onDelete={this.deleteWish} />)
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default WishContainer