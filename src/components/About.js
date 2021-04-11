import React, { Component } from 'react'
export class About extends Component {

  render() {
    return (
      <div className='App-about'>
        
        <img src="images/me.jpg" alt="Profile"/>
        <p id='p1-text'>
      Hello! My name is Todd Ivey and I am a Software Engineer based in Chicago, IL. I graduated from Middle Tennessee State University with a B.S. in Aerospace Administration. From there my career started with working in airport operations at Greenville-Spartanburg International Airport and then Chicago-Midway International Airport but I always had an itch to learn how to code and regretted not learning how to while in college.
        </p>
        
       <p> My journey in development began while riding the train from the airport I noticed an advertisement for a software engineering boot camp which was something I had no idea existed. After doing some introductory courses I fell in love with coding and decided to attend Fullstack Academy in Chicago. There, my skills grew immensely whether it was learning state management with React and Redux, or being able to build an entire application from the ground up, the learning never stopped. </p>
       <p>Today, I am looking to get his break into the software development indrustry. I keep my skills sharp with algorithm challenges, building this website, and working on a phone app.</p>
      
       <p>When I'm not busy coding, you can find me hanging out with my girlfriend Anna, along with our two pets Bruce and Penny.
          I enjoy staying active with playing sports in the summer and skiing in the winter. I also love trying new restaurants, cooking, I am an avid <a href="https://www.discogs.com/user/tji27/collection?sort_by=artists_sort" target="_blank" rel="noopener noreferrer">record collector</a>, and enjoy a good bourbon or pale ale at the end of the day.
          </p>
          <img src="images/bruceAndPenny.jpg" style={{width: '50%',height:'30%', padding:'2%', borderRadius:'10%'}} alt="Pets"/>
          
      </div>
    )
  }
}

export default About
