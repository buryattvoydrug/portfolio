import React, { useState } from 'react'
import '../scss/components/Nav.scss'
import {isMobile} from 'react-device-detect'

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
  console.log(menu)
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
            <li><a href='/'>Обо мне</a></li>
            <li><a href='/'>Портфолио</a></li>
            <li><a href='/'>Контакты</a></li>
          </ul>
      </div>
    </nav>}
    </>
  )
}
