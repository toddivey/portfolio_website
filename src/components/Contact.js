import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div className='App-body'>
        <div id='contact-detail'>
        <h4>Email</h4>
        <a href="mailto:toddivey@gmail.com?subject=Hello from toddivey.com" target="_blank" rel='noopener noreferrer'>toddivey@gmail.com</a>
        </div>
        <div id='contact-detail'>
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/todd-ivey/" target="_blank" rel='noopener noreferrer'>https://www.linkedin.com/in/todd-ivey/</a>
        </div>
      </div>
    )
  }
}

export default Contact
