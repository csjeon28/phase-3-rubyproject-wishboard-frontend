import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../src/components/Home'
import LogUser from '../src/components/LogUser'
import Board from '../src/components/Board'

const App = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({})
  const [boards, setBoards] = useState([])

  useEffect(() => {
    const fetchUsers = () => {
      fetch(`http://localhost:9292/users/search?q=${username}`)
        .then(resp => resp.json())
        .then(resp => {
          setUser(resp.user)
          console.log(resp)
          setBoards(resp.userBoards)
        })
    }
    fetchUsers()
  }, [username])

  return (
    <div className='app'>
      <Router>
        <div>
          <div className='app-navbar'>
            <Link to='/home' className='app-navbar-link'>Home</Link> -
            <Link to='/loguser' className='app-navbar-link'>Log-In</Link>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/loguser'>
              <LogUser setUsername={setUsername} user={user} />
            </Route>
            <Route exact path='/boards'>
              <Board boards={boards} setBoards={setBoards} username={username} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App