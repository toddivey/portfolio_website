import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
      <Link id="about" href to="/about" style={{ textDecoration: 'none', color: 'white', fontSize:'2em' }}>
        <div className='App-logo'>
        <img src='/logo.png' alt="my logo" />
        </div>
        <div id='enter-btn'>
          Enter
        </div>
      </Link>
      </div>
    )
  }
}

export default Home
