import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './portfolio.css'


setInterval(() => {
  document.body.style.setProperty('--random', Math.floor(Math.random() * 100)+'px');
}, 5000);


function Porfolio() {
  return (
    <div className='wrapper  container portfolio'>
        <div className="wrapper_title">
      <h2>{'<Selected Projects/>'}</h2>
        </div>

        <div className="portfolio-items ">

        <div className="portfolio_item">
          <a href="https://skyrt.fr" className='project1'>
              <h3>skyrt</h3>
            {/* <img src={VscGithub} alt="" /> */}
            <AiOutlineArrowRight className='arrow'/>
          </a>
        </div>
        <div className="portfolio_item">
          <a href="https://schoolartballet.com" className='project2'>
              <h3>schoolartballet</h3>
              <AiOutlineArrowRight className='arrow'/>

            </a>
        </div>
        <div className="portfolio_item">
          <a href="https://monbagage.ma" className='project3'>
              <h3>monbagage</h3>
              <AiOutlineArrowRight className='arrow'/>

            </a>
        </div>
        </div>
    </div>
  )
}

export default Porfolio
