import React, { Component } from 'react'

export class Projects extends Component {
  render() {
    return (
      <div>
        <div className='App-body'>
          <h4>
            <a href='http://www.popnspots.com' target='_blank' rel='noopener noreferrer'>Pop N Spots
            </a></h4>
          <p> Website built to find out the current busyness of a certain place</p>
          <br />

          <h4>
          <a href="https://gracehopper-abmt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            graceHOPer</a> </h4>
          <p> E-commerce website displaying thousands of products with filterable categories</p>
        </div>
      </div>
    )
  }
}

export default Projects
