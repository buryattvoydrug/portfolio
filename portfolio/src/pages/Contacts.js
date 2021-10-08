import React from 'react'
import '../scss/pages/Contacts.scss'
export default function Contacts() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <section className="contacts">
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
            <h2 className="about__title title">Контакты</h2>
          </section>
        </div>
      </div>
    </>
  )
}
