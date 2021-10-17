import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
export default function About() {
  const [show, setShow] = useState(false)
  // setTimeout(()=>setShow(true),500)
  let item=document.getElementById('hero')
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
      // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
      // scroll.scrollTo(824)

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
                <div className="about-block">
                  <span className="message__title">Игорь веб-разработчик</span>
                  <div className="message"><span><strong>Привет, я -</strong> Игорь.</span></div>
                  <div className="message"><span><strong>Я занимаюсь</strong> <br /> веб-разработкой</span></div>
                  <div className="message"><span>Мой <strong>стек</strong> технологий:</span>
                    <ul className="stack-list">
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>React JS</li>
                      <li>MERN stack</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </section>
    </>
  )
}
