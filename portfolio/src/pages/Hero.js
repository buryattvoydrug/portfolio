import React from 'react'
import '../scss/pages/Hero.scss'
export default function Hero() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <section className="hero">
            <div className="hero-block">
              <h1 className="hero__title title">Игорь Радимов</h1>
              <h2 className="hero__subtitle subtitle">веб-разработка</h2>
            </div>
          </section>
          <section className="about">
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
            <h2 className="about__title title">Обо мне</h2>
          </section>
          <section className="main-photo">
            <img src="images/hero.png" alt="Игорь Радимов" />
          </section>
        </div>
      </div>
    </>
  )
}