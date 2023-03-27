import React, { useState } from 'react'
import './navBar.css'

import { HiSun } from 'react-icons/hi';
import { BsMoonStarsFill } from 'react-icons/bs';

export default function NavBar() {
const [theme,setTheme] = useState('dark')
const [icon,setIcon] = useState(<HiSun className='switcher' size={30} color="#fff"/>
)
const r = document.querySelector(":root");
function switcher(){
  console.log(theme);
  if(theme==='dark'){
    setTheme('light')
    setIcon(<BsMoonStarsFill className='switcher' size={20} color="#000"/>)
    r.style.setProperty("--dark", "#e5e7e9");
    r.style.setProperty("--text", "#161513");
    r.style.setProperty("--light-grey", "#1C1C22");
    r.style.setProperty("--dark-blue", "#e5e7e9");
  }
  else {
    setTheme('dark')
    setIcon(<HiSun className='switcher' size={30} color="#fff"/>)
    r.style.setProperty("--text", "#161513");
    r.style.setProperty("--light-grey", "#e5e7e9");
    r.style.setProperty("--dark-blue", "#1C1C22");
    r.style.setProperty("--text" , "#fff");
    r.style.setProperty("--dark" , "#161513");
    }
  }
  return (
    <div className='nav_bar '>
<div className='logo'>//Zak Tita</div>
{/* <div className='menu'>
    <ul>
        <li><a href="http://">home</a></li>
        <li><a href="http://">case study</a></li>
        <li><a href="http://">contact</a></li>
    </ul>
</div> */}
<div className="ligh_switch" onClick={switcher}>
{icon}
</div>
    </div>
  )
}
