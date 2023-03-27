import React from 'react'
import './about.css'
import avatar from '../../assetes/hello.png'


function About() {
 

  return (
    <div className='wrapper container' id='aboutMe'>        
    <div className="wrapper_title aboutMe">
      <h2>{'<About_me/>'}</h2> 
      <p>I started my journey as a web designer, captivated by the idea of creating visually appealing digital experiences. However, I soon realized that there was more to website building than meets the eye. My desire to create truly effective and dynamic websites led me down the path of web development. 
      <br /><br />

I devoted my time to learning coding languages and mastering the technical side of the industry. Today, I am proud to offer a unique combination of both design and development skills to my clients. 
<br /><br />

With a deep understanding of both aesthetics and functionality, I am able to bring even the most elegant visions to life. I am excited to use my passion for both design and development to help businesses grow and succeed online.
</p>
    </div>
  <div className="img_cta">
  <img className="avatar" src={avatar} alt="" />
<div className="cta_bottom">
    <h2>{'<lets_work_together/>'}</h2>
    <a href="mailto:zakaria.thitah@gmail.com">

    <button>GET IN TOUCH</button>
    </a>
</div>
  </div>
    </div>
  )
}

export default About
