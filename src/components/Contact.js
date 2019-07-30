import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div className='App-body'>
        <h4>Email:</h4>
        <a href="mailto:toddivey@gmail.com" target="_blank" rel='noopener noreferrer'>toddivey@gmail.com</a>
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/todd-ivey/" target="_blank" rel='noopener noreferrer'>https://www.linkedin.com/in/todd-ivey/</a>
      </div>
    )
  }
}

export default Contact
