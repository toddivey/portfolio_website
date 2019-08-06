import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const path = this.props.location.pathname
    if (path === '/'){
      return (
        <h1 className='App-header'>Welcome</h1>
    );
    }
    return (
      <h1 className='App-header'>
        <img src='/logo.png' style={{width: '60px', height: '50px' }} alt="Header IMG" />
      </h1>
  )
  }
}

export default withRouter(Header);
