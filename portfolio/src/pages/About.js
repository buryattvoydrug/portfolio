import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Messages from '../components/Messages'
export default function About() {
  const [show, setShow] = useState(false)
  // setTimeout(()=>setShow(true),500)
  let item=document.getElementById('hero')
  let clientHeight=document.documentElement.clientHeight
  // if(item){
    // console.log(item.getBoundingClientRect())
  // }
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if(item && item.getBoundingClientRect().bottom<=300){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().bottom>300){
      setShow(false)
    }
  })
  let myRef = useRef()
    return (
    <>
      <section ref={myRef} id="about" className="about-page scroll-page">
      <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="trans"
                  unmountOnExit>
              <div className="about scroll-page">
                <h2 className="about__title title">Обо мне</h2>
                <Messages/>
              </div>
            </CSSTransition>
          </section>
    </>
  )
}
