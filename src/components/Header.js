import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


class Header extends Component {
  render() {
    let path = this.props.location.pathname
      if (path === '/'){
        return (
          <h1 className='App-header'>Welcome</h1>
        );
      }
    path =(path.charAt(1).toUpperCase() + path.slice(2))
      return (
        <h1 className='App-header'>
          <Link id="home" href to="/">
            <img src='/logo.png' style={{width: '60px', height: '50px' }} alt="Header IMG" />
          </Link>
          {path}
        </h1>
      )
  }
}

export default withRouter(Header);
