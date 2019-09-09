import React, { Component } from 'react'

export class Projects extends Component {
  render() {
    return (
      <div>
        <div className='App-body'>
          <h4>
            <div>
              <div id="title">
            <a href='http://www.popnspots.com' target='_blank' rel='noopener noreferrer'>Pop N Spots </a></div>
            <div id="image">
            <a href='http://www.popnspots.com' target='_blank' rel='noopener noreferrer'>
            <img src='/images/Screen Shot-popNspots.png' style={{height: '50%', width: '30%', padding:'2%'}} alt="popNspots screenshot" />
            </a>
            </div>
            </div>
          </h4>
          <p> Webapp built to quickly view the current busyness of nearby places in Chicago. </p>

          <br />

          <h4>
          <div>
              <div id="title">
            <a href="https://gracehopper-abmt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              graceHOPer
              </a>
              </div>
              <div id="image">
              <a href="https://gracehopper-abmt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src='/images/Screen Shot-graceHOPper.png' style={{height: '50%', width: '30%', padding:'2%'}} alt="graceHOPper screen shot" />
            </a>
            </div>
            </div>
          </h4>
          <p> E-commerce website displaying thousands of products with filterable categories.</p>
        </div>
      </div>
    )
  }
}

export default Projects
