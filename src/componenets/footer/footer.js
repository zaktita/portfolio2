import React from 'react'
import {FaLinkedinIn } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import './footer.css'

function Footer() {
  return (
    <div className='footer container'>
      <div className='logo'>//Zak Tita</div>
      <div className="social">
        <a href="https://www.linkedin.com/in/zakariathitah">
      <FaLinkedinIn className='icon'/>
        </a>
        <a href="https://github.com/zaktita">
      <VscGithub className='icon'/>
        </a>
      </div>
    </div>
  )
}

export default Footer
