import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Messages() {
  const [show, setShow] = useState(false)
  setTimeout(()=>setShow(true),1500)
  const [show2, setShow2] = useState(false)
  setTimeout(()=>setShow2(true),4000)
  const [write, setWrite] = useState(true)
  setTimeout(()=>setWrite(false),4000)
  return (
    <>
    
                          <div className="about-block">
                            <span className="message__title">Игорь веб-разработчик</span>
                            <div className="message"><span><strong>Привет, я -</strong> Игорь.</span></div>
                            <CSSTransition
                              in={show}
                              timeout={1000}
                              classNames="port"
                              unmountOnExit>
                                <div className="message"><span><strong>Я занимаюсь</strong> <br /> веб-разработкой</span></div>
                              </CSSTransition>
                            <CSSTransition
                              in={show2}
                              timeout={1000}
                              classNames="port"
                              unmountOnExit>
                                <div className="message"><span>Мой <strong>стек</strong> технологий:</span>
                                  <ul className="stack-list">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>React JS</li>
                                    <li>MERN stack</li>
                                  </ul>
                                </div>
                            </CSSTransition>
                            <CSSTransition
                              in={write}
                              timeout={1000}
                              classNames="popup"
                              unmountOnExit>
                            <div className="write">
                              <img src="/images/Печатание.gif" alt=""/>
                            </div>
                            </CSSTransition>
                          </div>
    
    </>
  )
}
