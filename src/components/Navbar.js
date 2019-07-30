import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'

export class Navbar extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu>
      <Link id="home" className="menu-item" href to="/">Home</Link>
      <Link id="resume" className="menu-item" href to="/resume">Resume</Link>
      <Link id="projects" className="menu-item" href to="/projects">Projects</Link>
      <Link id="about" className="menu-item" href to="/about">About</Link>
      <Link id="contact" className="menu-item" href to="/contact">Contact</Link>
    </Menu>
    )
  }
}

export default Navbar
