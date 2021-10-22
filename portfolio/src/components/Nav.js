import React, { useState } from 'react'
import '../scss/components/Nav.scss'
import {isMobile} from 'react-device-detect'
import { CSSTransition } from 'react-transition-group'

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
  
  function scrollToBottom (){
    if(window.innerWidth<=1024){
      toggleMenu()
    }
    window.scrollTo(0,10000)
    setTimeout(()=>window.scrollTo(0,10000),600)
    setTimeout(()=>window.scrollTo(0,10000),1200)
    setTimeout(()=>window.scrollTo(0,10000),1800)
  }
  return (
    <>
    {window.innerWidth<=1024 && 
      <button onClick={toggleMenu} className={menu? 'active__button nav-button': 'nav-button'}>
              <span></span>
              <span></span>
              <span></span>
            </button>
    }
    <nav>
      <CSSTransition
                  in={menu || window.innerWidth>1024}
                  timeout={1000}
                  classNames="nav"
                  unmountOnExit>
      <div className={window.innerWidth<=1024? "nav-container" : "container"}>
          <div className="buttons">
            <a href="/"><img src="/images/GitHub.png" alt="" /> </a>
            <a href="/"><img src="/images/Behance.png" alt="" /> </a>
          </div>
          <ul className="nav-list subtitle">
            <li onClick={toggleMenu}><a className="link" href='#hero'>Обо мне</a></li>
            <li onClick={toggleMenu}><a className="link" href='#portfolio'>Портфолио</a></li>
            <li onClick={()=>scrollToBottom()}><span className="link" >Контакты</span></li>
          </ul>
      </div>
    </CSSTransition>
    </nav>
    
    </>
  )
}
