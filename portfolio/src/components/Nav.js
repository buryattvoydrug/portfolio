import React, { useState } from 'react'
import '../scss/components/Nav.scss'
import {isMobile} from 'react-device-detect'
import { useLocation } from 'react-router';

export default function Nav() {

  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflowY = "scroll";
  }
  function scrollToBottom (){
    window.scrollTo(0,10000)
    setTimeout(()=>window.scrollTo(0,10000),600)
    setTimeout(()=>window.scrollTo(0,10000),1200)
    setTimeout(()=>window.scrollTo(0,10000),1800)
  }
  return (
    <>
    {isMobile && 
      <button onClick={toggleMenu} className={menu? 'active__button nav-button': 'nav-button'}>
              <span></span>
              <span></span>
              <span></span>
            </button>
    }
    {(menu || !isMobile) &&
    <nav>
      <div className="container">
          <div className="buttons">
            <a href="/"><img src="/images/GitHub.png" alt="" /> </a>
            <a href="/"><img src="/images/Behance.png" alt="" /> </a>
          </div>
          <ul className="nav-list subtitle">
            <li><a className="link" href='#hero'>Обо мне</a></li>
            <li><a className="link" href='#portfolio'>Портфолио</a></li>
            <li onClick={()=>scrollToBottom()}><span className="link" >Контакты</span></li>
          </ul>
      </div>
    </nav>}
    </>
  )
}
