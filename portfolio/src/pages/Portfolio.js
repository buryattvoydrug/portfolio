import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Item from '../components/Item'
import '../scss/pages/Portfolio.scss'

export default function Portfolio() {
  const [show, setShow] = useState(false)
  // setTimeout(()=>setShow(true),500)
  let item=document.querySelector('.portfolio-page')
  let clientHeight=document.documentElement.clientHeight
  // if(item){
    // console.log(item.getBoundingClientRect())
  // }
  // const [scroll, setScroll] = React.useState(0);
  // const handleScroll = () => {
  //   setScroll(window.scrollY);
    
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    if(item && item.getBoundingClientRect().top<=0){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().top>0){
      setShow(false)
    }
  })
  return (
    <>
      <section id="portfolio" className="portfolio-page">
          <div className="portfolio">
          <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="port"
                  unmountOnExit>
                    <div className="">
                      {window.innerWidth<1280?
                        <h2 className="portfolio__title title">Порт фолио</h2>
                      :
                        <h2 className="portfolio__title title">Портфолио</h2>
                      }
                    </div>
                  </CSSTransition>
            <div className="portfolio-list">
              <Item number={0} size={'large'}/>
              <Item number={1} size={'medium'}/>
              <Item number={window.innerWidth<1280? 2: 1} size={'small'}/>
              <Item number={window.innerWidth<1280? 3 : 2} size={'small'}/>
              <Item number={window.innerWidth<1280? 4 : 2} size={'medium'}/>
              <Item number={window.innerWidth<1280? 5 : 3} size={'large'}/>
            </div>
          </div>
      </section>
    </>
  )
}
