import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../scss/pages/Contacts.scss'
export default function Contacts() {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState(null)
   useEffect(() => {
    setItem(document.getElementsByClassName('portfolio-page')[0])
    // console.log(item)
  },[item])

  const handleScroll = () => {
    if(item && item.getBoundingClientRect().bottom<=450){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().bottom>450){
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // console.log('Contacts')
  
  return (
    <>
          <section id="contacts" className="contacts-page scroll-page">
            <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="trans"
                  unmountOnExit>
                  <div className="contacts">
                    <h2 className="about__title title">Контакты</h2>
                    <div className="contacts-block">
                      <h3 className="contacts__subtitle subtitle">Свяжитесь со мной любым удобным Вам способом.</h3>
                      <div className="doc">
                        <a href="/">
                          <img src="/images/telegram.png" alt="" className="doc__img" />
                        </a>
                        <a href="/">
                          <img src="/images/vk.png" alt="" className="doc__img" />
                        </a>
                        <a href="/">
                          <img src="/images/mail.png" alt="" className="doc__img" />
                        </a>
                        <a href="/">
                          <img src="/images/instagram.png" alt="" className="doc__img" />
                        </a>
                        <a href="/">
                          <img src="/images/whats.png" alt="" className="doc__img" />
                        </a>
                      </div>
                    </div>
                  </div>
            </CSSTransition>
          </section>
    </>
  )
}
