import React, { Component } from 'react'

export class Projects extends Component {
  render() {
    return (
      <div>
        <div className='App-body'>
          <h4>
            <a href='http://www.popnspots.com' target='_blank' rel='noopener noreferrer'>Pop N Spots
            </a></h4>
          <p> Webapp built to quickly view the current busyness of nearby places in Chicago. </p>
          <br />

          <h4>
          <a href="https://gracehopper-abmt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            graceHOPer</a> </h4>
          <p> E-commerce website displaying thousands of products with filterable categories.</p>
        </div>
      </div>
    )
  }
}

export default Projects
