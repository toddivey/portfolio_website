import React, { Component } from 'react'
export class About extends Component {

  render() {
    return (
      <div className='App-about'>
        <div class='intro'>
          <img src="images/me.jpg" alt="Profile"/>
          <p>
            Hello! My name is Todd Ivey and I am a Software Engineer based in Chicago, IL. I graduated from Middle Tennessee State University with a B.S. in Aerospace Administration. From there my career started with working in airport operations at Greenville-Spartanburg International Airport and then Chicago-Midway International Airport but I always had an itch to learn how to code and regretted not learning how to while in college.
          </p>
        </div>
        <div class='journey'>
          <p> 
            My journey in development began while riding the train from the airport I noticed an advertisement for a software engineering boot camp which was something I had no idea existed. After doing some introductory courses I fell in love with coding and decided to attend Fullstack Academy in Chicago. There, my skills grew immensely whether it was learning state management with React and Redux, or being able to build an entire application from the ground up, the learning never stopped. 
            </p>
          <p>
            Today, I am a Fullstack Web Developer at Rise Interactive, a digital marketing agency located in Chicago. This position has provided me the opportunity to work on a multitude of projects that help keep my skills sharp. From developing internal creation tools in JS to content migration between different CMS platforms in SQL my work takes me across the development spectrum. 
          </p>
        </div>
        <div class="personal">
            <p>
              When I'm not busy coding, you can find me hanging out with my girlfriend Anna, along with our two pets Bruce and Penny.
              I enjoy staying active with playing sports in the summer and skiing in the winter. I also love trying new restaurants, cooking, I am an avid <a href="https://www.discogs.com/user/tji27/collection?sort_by=artists_sort" target="_blank" rel="noopener noreferrer">record collector</a>, and enjoy a good bourbon or pale ale at the end of the day.
            </p>
            <img src="images/bruceAndPenny.jpg" alt="Pets"/>
        </div>
      </div>
    )
  }
}

export default About
