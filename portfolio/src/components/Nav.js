import React, { useState } from 'react'
import '../scss/components/Nav.scss'
import {isMobile} from 'react-device-detect'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

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
          {(location.pathname!="/portfolio" || isMobile) && <ul className="nav-list subtitle">
            <li><Link to='/about'>Обо мне</Link></li>
            <li><Link to='/portfolio'>Портфолио</Link></li>
            <li><Link to='/contacts'>Контакты</Link></li>
          </ul>}
      </div>
    </nav>}
    </>
  )
}
