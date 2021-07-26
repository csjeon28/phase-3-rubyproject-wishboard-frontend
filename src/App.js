import React, { Component } from 'react'
import './App.css'
import WishContainer from './components/WishContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Wish Board</h1>
        </div>
        <WishContainer />
      </div>
    )
  }
}

export default App