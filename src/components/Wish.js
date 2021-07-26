import React, { Component } from 'react'

class Wish extends Component {
    handleClick = () => { this.props.onClick(this.props.wish.id) }

    handleDelete = () => { this.props.onDelete(this.props.wish.id) }

    render() {
        return (
            <div className="tile">
                <h4 onClick={this.handleClick}>{this.props.wish.title}</h4>
                <p onClick={this.handleClick}>{this.props.wish.description}</p>
                <button className="deleteButton" onClick={this.handleDelete}>x</button>
            </div>
        )
    }
}

export default Wish