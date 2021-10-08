import React from 'react'
import '../scss/components/Nav.scss'
export default function Nav() {
  return (
    <>
    <nav>
      <div className="container">
          <div className="buttons">
            <a href="/"><img src="/images/GitHub.png" alt="" /> </a>
            <a href="/"><img src="/images/Behance.png" alt="" /> </a>
          </div>
          <ul className="nav-list subtitle">
            <li><a href='/'>Обо мне</a></li>
            <li><a href='/'>Портфолио</a></li>
            <li><a href='/'>Контакты</a></li>
          </ul>
      </div>
    </nav>
    </>
  )
}
