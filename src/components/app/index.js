import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from '../about'
import Team from '../team-container'
import Connect from '../connect-container'
import Landing from '../landing'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='main-page'>
            <div className='nav-bar'>
              <Link to='/'> Home </Link>
              <Link to='/about'> About </Link>
              <Link to='/team'> Team </Link>
              <Link to='/connect'> Connect </Link>
            </div>
            <div className='main-content'>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/team' component={Team} />
              <Route exact path='/connect' component={Connect} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
