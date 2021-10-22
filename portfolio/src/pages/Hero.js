import React, { useState } from 'react'
import '../scss/pages/Hero.scss'
import '../scss/Transitions.scss'
import { CSSTransition } from 'react-transition-group';
import Photo from './Photo';

export default function Hero() {
  console.log(window.innerWidth)
  const [show, setShow] = useState(false)
  setTimeout(()=>setShow(true),500)
  return (
    <>
          <section id="hero" className="hero scroll-page">
            {window.innerWidth<1280 && <Photo/>}
            <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="trans"
                  unmountOnExit>
              <div className="hero-block">
                <h1 className="hero__title title">Игорь Радимов</h1>
                <h2 className="hero__subtitle subtitle">веб-разработка</h2>
              </div>
            </CSSTransition>
          </section>
          
    </>
  )
}
