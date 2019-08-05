import React, { Component } from 'react'
import Header from './Header'
export class About extends Component {

  render() {
    return (
      <div className='App-about'>
        <div id='p1'>
        <img src="images/me.jpg" style={{width: '30%', padding:'2%'}} />
        <p id='p1-text'>
        I am a Software Engineer based in Chicago, IL. I graduated from Middle Tennessee State University with a B.S. in Aerospace Administration. From there my career started with working in airport operations at Greenville-Spartanburg International Airport and then Chicago-Midway International Airport but I always had an itch to learn how to code and regretted not learning how to while in college.
        </p>
        <div id='p_filler'/>
        </div>
        <br/>

       <p> My journey in development began while riding the train from the airport I noticed an advertisement for a software engineering boot camp which was something I had no idea existed. After doing some introductory courses I fell in love with coding and decided to attend Fullstack Academy in Chicago. There, my skills grew immensely whether it was learning state management with React and Redux, or being able to build an entire application from the ground up, the learning never stopped. </p>

       <br/>

       <p>Today, I am looking to get his break into the software development indrustry. I keep my skills sharp with algorithm challenges, building this website, and working on an arcade style game.</p>

       <br/>

       <p>When I'm not busy coding, you can find me hanging out with his girlfriend Anna, along with our two pets Bruce and Penny. I enjoy staying active with playing sports in the summer and skiing in the winter. I also love trying new restaurants, cooking, am an avid record collector, and enjoys a good bourbon or craft beer at the end of the day. </p>
        <br/>
      </div>
    )
  }
}

export default About
