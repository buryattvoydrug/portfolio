import React from 'react'

export default function Photo() {
  return (
    <>
      <section className="main-photo">
        {window.innerWidth<1280 ?
          <img src="images/hero.png" alt="Игорь Радимов" />
        :
        <div className="container">
          <img src="images/hero.png" alt="Игорь Радимов" />
        </div>}
      </section>
    </>
  )
}
