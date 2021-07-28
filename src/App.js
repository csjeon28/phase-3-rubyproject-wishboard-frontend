import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../src/components/Home'
import LogUser from '../src/components/LogUser'
import Board from '../src/components/Board'
import NewUser from '../src/components/NewUser'

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({})
  const [boards, setBoards] = useState([])

  useEffect(() => {
    const fetchUsers = () => {
      fetch(`http://localhost:9292/users/search?q=${username}`)
        .then(resp => resp.json())
        .then(data => {
          setUser(data.user)
          setBoards(data.userBoards)
        })
    }
    fetchUsers()
  }, [username])


  const updateBoards = (id) => {
    const updatedBoards = boards.filter(b => b.id !== id)
    setBoards(updatedBoards)
  }

  return (
    <div className='app'>
      <div className='app-header'>
        <Router>
          <div>
            <ul className='app-navbar'>
              <li><Link to='/home' className='app-navbar-link'>Home</Link></li>
              <li><Link to='/loguser' className='app-navbar-link'>Log-In</Link>   /   <Link to='/newuser' className='app-navbar-link'>New User</Link></li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/newuser' component={NewUser} />
              <Route exact path='/loguser'>
                <LogUser setBoards={setBoards} setUsername={setUsername} user={user} />
              </Route>
              <Route exact path='/newuser'>
                <NewUser />
              </Route>
              <Route exact path='/boards'>
                <Board updateBoards={updateBoards} boards={boards} username={username} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )

}

export default App